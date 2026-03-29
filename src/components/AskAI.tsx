import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import type { Section, Progress } from '../types';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { X, Send, Trash2, ChevronDown, Sparkles } from 'lucide-react';
import { guideContent } from '../data/guideContent';

interface AskAIProps {
  sections: Section[];
  progress: Progress;
}

interface Message {
  role: 'user' | 'ai';
  text: string;
}

type ChatStore = Record<string, Message[]>;

const CHAT_KEY = 'mm-walkthrough-chats';

function loadAllChats(): ChatStore {
  try {
    const stored = localStorage.getItem(CHAT_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveAllChats(chats: ChatStore) {
  try {
    localStorage.setItem(CHAT_KEY, JSON.stringify(chats));
  } catch { /* storage full */ }
}

function getCurrentChapterIndex(sections: Section[], progress: Progress): number {
  for (let i = 0; i < sections.length; i++) {
    if (!sections[i].items.every((item) => progress[item.id])) return i;
  }
  return sections.length - 1;
}

function buildChapterContext(section: Section, chapterIndex: number, progress: Progress): string {
  const lines = [`Chapter ${chapterIndex + 1}: ${section.title}`];
  if (section.description) lines.push(section.description);
  lines.push('');

  lines.push('=== PLAYER PROGRESS ===');
  for (const item of section.items) {
    const done = progress[item.id] ? '[DONE]' : '[TODO]';
    lines.push(`${done} ${item.text}`);
  }

  const guide = guideContent[section.id];
  if (guide) {
    lines.push('');
    lines.push('=== DETAILED WALKTHROUGH GUIDE ===');
    lines.push(guide);
  }

  return lines.join('\n');
}

export function AskAI({ sections, progress }: AskAIProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chats, setChats] = useState<ChatStore>(loadAllChats);
  const [loading, setLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentIdx = useMemo(
    () => getCurrentChapterIndex(sections, progress),
    [sections, progress]
  );

  const [viewingIdx, setViewingIdx] = useState(currentIdx);

  // Reset to current chapter when panel opens + lock body
  useEffect(() => {
    if (open) {
      setViewingIdx(currentIdx);
      // Store scroll position and lock body
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (top) window.scrollTo(0, parseInt(top) * -1);
    }
    return () => {
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (top) window.scrollTo(0, parseInt(top) * -1);
    };
  }, [open, currentIdx]);

  // Handle iOS keyboard — resize the chat container to fit the visual viewport
  useEffect(() => {
    if (!open) return;
    const vv = window.visualViewport;
    if (!vv) return;

    const onResize = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.style.height = `${vv.height}px`;
        chatContainerRef.current.style.top = `${vv.offsetTop}px`;
      }
      // Keep messages scrolled to bottom when keyboard opens
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    vv.addEventListener('resize', onResize);
    vv.addEventListener('scroll', onResize);
    onResize();
    return () => {
      vv.removeEventListener('resize', onResize);
      vv.removeEventListener('scroll', onResize);
    };
  }, [open]);

  const chapterId = sections[viewingIdx]?.id || 'unknown';
  const chapterTitle = sections[viewingIdx]?.title || 'Unknown';
  const messages = chats[chapterId] || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, viewingIdx]);

  const setMessages = useCallback((updater: (prev: Message[]) => Message[]) => {
    setChats((prev) => {
      const updated = { ...prev, [chapterId]: updater(prev[chapterId] || []).slice(-50) };
      saveAllChats(updated);
      return updated;
    });
  }, [chapterId]);

  const clearChat = useCallback(() => {
    setChats((prev) => {
      const updated = { ...prev };
      delete updated[chapterId];
      saveAllChats(updated);
      return updated;
    });
  }, [chapterId]);

  const send = async () => {
    const q = input.trim();
    if (!q || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    setLoading(true);

    // Blur input to dismiss keyboard after sending
    inputRef.current?.blur();

    const history = messages.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      text: m.text,
    }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: q,
          history,
          chapterContext: buildChapterContext(sections[viewingIdx], viewingIdx, progress),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => [...prev, { role: 'ai', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'ai', text: data.error || 'Something went wrong.' }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', text: 'Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-12 gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 px-5"
        aria-label="Ask AI for help"
      >
        <Sparkles className="size-4" />
        <span className="text-sm font-medium">Ask AI</span>
      </Button>
    );
  }

  return (
    <div
      ref={chatContainerRef}
      className="fixed inset-0 z-50 flex flex-col bg-background"
      style={{ height: '100dvh' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card flex-shrink-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-accent flex-shrink-0" />
            <span className="font-semibold text-foreground text-sm">Walkthrough Assistant</span>
          </div>
          <button
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-0.5"
            onClick={() => setShowPicker(!showPicker)}
          >
            <span className="truncate">Ch. {viewingIdx + 1}: {chapterTitle}</span>
            <ChevronDown className={`size-3 flex-shrink-0 transition-transform ${showPicker ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {messages.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearChat} className="h-8 w-8 p-0">
              <Trash2 className="size-3.5 text-muted-foreground" />
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)} className="h-8 w-8 p-0">
            <X className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Chapter picker */}
      {showPicker && (
        <div className="border-b border-border bg-card flex-shrink-0 max-h-64 overflow-y-auto">
          {sections.map((s, i) => {
            const hasChat = (chats[s.id]?.length || 0) > 0;
            const msgCount = chats[s.id]?.length || 0;
            return (
              <button
                key={s.id}
                className={`flex items-center gap-2 w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary/70 ${
                  i === viewingIdx ? 'bg-secondary' : ''
                }`}
                onClick={() => { setViewingIdx(i); setShowPicker(false); }}
              >
                <span className="flex-shrink-0">{s.icon}</span>
                <span className="truncate flex-1">Ch. {i + 1}: {s.title}</span>
                {i === currentIdx && (
                  <span className="text-[10px] bg-gold/20 text-gold px-1.5 py-0.5 rounded-full flex-shrink-0">Current</span>
                )}
                {hasChat && (
                  <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-full flex-shrink-0">{msgCount}</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Messages */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="px-4 py-3">
          {messages.length === 0 && (
            <div className="py-12 px-6 text-center text-muted-foreground text-sm leading-relaxed">
              <Sparkles className="size-8 text-accent/40 mx-auto mb-3" />
              <p>Ask me anything about <strong className="text-foreground">{chapterTitle}</strong>!</p>
              <p className="mt-1 text-xs">I have the full chapter details and know what you&apos;ve completed.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-accent text-accent-foreground rounded-br-md'
                    : 'bg-secondary text-secondary-foreground rounded-bl-md border border-border'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-3">
              <div className="bg-secondary text-muted-foreground rounded-2xl rounded-bl-md px-4 py-2.5 text-sm border border-border">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="flex gap-2 p-3 border-t border-border bg-card flex-shrink-0">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask about this chapter..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
          disabled={loading}
          className="flex-1 h-11 px-3 rounded-lg border border-border bg-secondary/50 text-foreground text-[16px] outline-none focus:border-accent placeholder:text-muted-foreground disabled:opacity-50"
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="h-11 w-11 flex items-center justify-center rounded-lg bg-accent text-accent-foreground flex-shrink-0 disabled:opacity-50"
        >
          <Send className="size-4" />
        </button>
      </div>
    </div>
  );
}
