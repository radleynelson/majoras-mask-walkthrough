import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import type { Section, Progress } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from './ui/drawer';
import { X, Send, Trash2, ChevronDown, Sparkles } from 'lucide-react';

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

  for (const item of section.items) {
    const done = progress[item.id] ? '[DONE]' : '[TODO]';
    lines.push(`${done} ${item.text}`);
    if (item.detail) lines.push(`  Detail: ${item.detail}`);
  }

  return lines.join('\n');
}

// Detect if we're on mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export function AskAI({ sections, progress }: AskAIProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chats, setChats] = useState<ChatStore>(loadAllChats);
  const [loading, setLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const currentIdx = useMemo(
    () => getCurrentChapterIndex(sections, progress),
    [sections, progress]
  );

  const [viewingIdx, setViewingIdx] = useState(currentIdx);

  // Reset to current chapter when panel opens
  useEffect(() => {
    if (open) setViewingIdx(currentIdx);
  }, [open, currentIdx]);

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

  // Chapter picker content (shared between mobile and desktop)
  const pickerContent = (
    <div className="flex flex-col bg-card border border-border rounded-lg max-h-64 overflow-y-auto">
      {sections.map((s, i) => {
        const hasChat = (chats[s.id]?.length || 0) > 0;
        const msgCount = chats[s.id]?.length || 0;
        return (
          <button
            key={s.id}
            className={`flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-secondary/70 ${
              i === viewingIdx ? 'bg-secondary' : ''
            }`}
            onClick={() => { setViewingIdx(i); setShowPicker(false); }}
          >
            <span className="flex-shrink-0">{s.icon}</span>
            <span className="truncate flex-1">
              Ch. {i + 1}: {s.title}
            </span>
            {i === currentIdx && (
              <span className="text-[10px] bg-gold/20 text-gold px-1.5 py-0.5 rounded-full flex-shrink-0">
                Current
              </span>
            )}
            {hasChat && (
              <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-full flex-shrink-0">
                {msgCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );

  // Messages content (shared between mobile and desktop)
  const messagesContent = (
    <>
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
    </>
  );

  // Input row (shared between mobile and desktop)
  const inputRow = (
    <div className="flex gap-2 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] border-t border-border bg-card flex-shrink-0">
      <Input
        type="text"
        placeholder="Ask about this chapter..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && send()}
        disabled={loading}
        className="flex-1 h-10 text-[16px] bg-secondary/50"
      />
      <Button
        size="icon"
        onClick={send}
        disabled={loading || !input.trim()}
        className="h-10 w-10 bg-accent hover:bg-accent/80 text-accent-foreground flex-shrink-0"
      >
        <Send className="size-4" />
      </Button>
    </div>
  );

  // FAB button
  const fab = (
    <Button
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 z-50 h-12 gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 px-5"
      aria-label="Ask AI for help"
    >
      <Sparkles className="size-4" />
      <span className="text-sm font-medium">Ask AI</span>
    </Button>
  );

  // -- Mobile: use Drawer --
  if (isMobile) {
    return (
      <>
        {!open && fab}
        <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
          <DrawerContent className="bg-card border-border max-h-[85dvh] flex flex-col" style={{ maxHeight: '85dvh' }}>
            <DrawerHeader className="flex-shrink-0 pb-2">
              <div className="flex items-center justify-between">
                <DrawerTitle className="flex items-center gap-2 text-foreground">
                  <Sparkles className="size-4 text-accent" />
                  Walkthrough Assistant
                </DrawerTitle>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <Button variant="ghost" size="icon-xs" onClick={clearChat}>
                      <Trash2 className="size-3.5 text-muted-foreground" />
                    </Button>
                  )}
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon-xs">
                      <X className="size-4 text-muted-foreground" />
                    </Button>
                  </DrawerClose>
                </div>
              </div>

              {/* Chapter picker button */}
              <button
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
                onClick={() => setShowPicker(!showPicker)}
              >
                Ch. {viewingIdx + 1}: {chapterTitle}
                <ChevronDown className={`size-3 transition-transform ${showPicker ? 'rotate-180' : ''}`} />
              </button>
            </DrawerHeader>

            {showPicker && (
              <div className="px-4 pb-2 flex-shrink-0">
                {pickerContent}
              </div>
            )}

            <ScrollArea className="flex-1 min-h-0 px-4">
              <div className="py-2">
                {messagesContent}
              </div>
            </ScrollArea>

            {inputRow}
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  // -- Desktop: fixed panel --
  if (!open) {
    return fab;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="w-full max-w-lg h-[600px] max-h-[80vh] bg-card border border-border rounded-xl flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border flex-shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-accent" />
              <span className="font-semibold text-foreground text-sm">Walkthrough Assistant</span>
            </div>
            <button
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-0.5"
              onClick={() => setShowPicker(!showPicker)}
            >
              Ch. {viewingIdx + 1}: {chapterTitle}
              <ChevronDown className={`size-3 transition-transform ${showPicker ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <Button variant="ghost" size="icon-xs" onClick={clearChat}>
                <Trash2 className="size-3.5 text-muted-foreground" />
              </Button>
            )}
            <Button variant="ghost" size="icon-xs" onClick={() => setOpen(false)}>
              <X className="size-4 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Chapter picker */}
        {showPicker && (
          <div className="px-4 py-2 border-b border-border flex-shrink-0">
            {pickerContent}
          </div>
        )}

        {/* Messages */}
        <ScrollArea className="flex-1 min-h-0 px-4">
          <div className="py-3">
            {messagesContent}
          </div>
        </ScrollArea>

        {/* Input */}
        {inputRow}
      </div>
    </div>
  );
}
