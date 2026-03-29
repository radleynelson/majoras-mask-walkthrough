import { useState, useRef, useEffect } from 'react';
import type { Section, Progress } from '../types';

interface AskAIProps {
  sections: Section[];
  progress: Progress;
}

interface Message {
  role: 'user' | 'ai';
  text: string;
}

function buildChapterContext(sections: Section[], progress: Progress): string {
  // Find current chapter (first with unchecked items)
  let currentIdx = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    if (!sections[i].items.every((item) => progress[item.id])) {
      currentIdx = i;
      break;
    }
  }

  const section = sections[currentIdx];
  const lines = [`Chapter ${currentIdx + 1}: ${section.title}`];
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const q = input.trim();
    if (!q || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: q,
          chapterContext: buildChapterContext(sections, progress),
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
        <span className="ask-ai-title">✦ Walkthrough Assistant</span>
        <button className="ask-ai-close" onClick={() => setOpen(false)}>✕</button>
      </div>

      <div className="ask-ai-messages">
        {messages.length === 0 && (
          <div className="ask-ai-empty">
            Ask me anything about Majora's Mask! I know where you are in the walkthrough and can help with puzzles, bosses, collectibles, and more.
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
