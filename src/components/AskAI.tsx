import { useState, useRef, useEffect, useMemo } from 'react';
import type { Section, Progress } from '../types';

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

export function AskAI({ sections, progress }: AskAIProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chats, setChats] = useState<ChatStore>(loadAllChats);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentIdx = useMemo(
    () => getCurrentChapterIndex(sections, progress),
    [sections, progress]
  );

  const chapterId = sections[currentIdx]?.id || 'unknown';
  const chapterTitle = sections[currentIdx]?.title || 'Unknown';
  const messages = chats[chapterId] || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const setMessages = (updater: (prev: Message[]) => Message[]) => {
    setChats((prev) => {
      const updated = { ...prev, [chapterId]: updater(prev[chapterId] || []).slice(-50) };
      saveAllChats(updated);
      return updated;
    });
  };

  const clearChat = () => {
    setChats((prev) => {
      const updated = { ...prev };
      delete updated[chapterId];
      saveAllChats(updated);
      return updated;
    });
  };

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
          chapterContext: buildChapterContext(sections[currentIdx], currentIdx, progress),
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
      <button className="ask-ai-fab" onClick={() => setOpen(true)} aria-label="Ask AI for help">
        <span className="ask-ai-fab-icon">✦</span>
        <span className="ask-ai-fab-label">Ask AI</span>
      </button>
    );
  }

  return (
    <div className="ask-ai-panel">
      <div className="ask-ai-header">
        <div className="ask-ai-header-text">
          <span className="ask-ai-title">✦ Walkthrough Assistant</span>
          <span className="ask-ai-chapter">Ch. {currentIdx + 1}: {chapterTitle}</span>
        </div>
        <div className="ask-ai-header-actions">
          {messages.length > 0 && (
            <button className="ask-ai-clear" onClick={clearChat}>Clear</button>
          )}
          <button className="ask-ai-close" onClick={() => setOpen(false)}>✕</button>
        </div>
      </div>

      <div className="ask-ai-messages">
        {messages.length === 0 && (
          <div className="ask-ai-empty">
            Ask me anything about <strong>{chapterTitle}</strong>! I have the full chapter details and know what you've completed.
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`ask-ai-msg ${msg.role}`}>
            <div className="ask-ai-msg-bubble">{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div className="ask-ai-msg ai">
            <div className="ask-ai-msg-bubble ask-ai-typing">Thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="ask-ai-input-row">
        <input
          className="ask-ai-input"
          type="text"
          placeholder="How do I beat this boss?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          disabled={loading}
        />
        <button className="ask-ai-send" onClick={send} disabled={loading || !input.trim()}>
          ➤
        </button>
      </div>
    </div>
  );
}
