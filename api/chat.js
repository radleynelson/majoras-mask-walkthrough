const CLAUDE_URL = process.env.CLAUDE_INFERENCE_URL;
const CLAUDE_TOKEN = process.env.CLAUDE_INFERENCE_TOKEN;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history, chapterContext } = req.body;

  if (!message || typeof message !== 'string' || message.length > 5000) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  const systemPrompt = `You are a helpful Majora's Mask walkthrough assistant. You help players who are stuck or need guidance on The Legend of Zelda: Majora's Mask.

You are knowledgeable about both the N64 and 3DS versions. Give concise, practical advice. Use specific directions (north, south, east, west), item names, and enemy names. If a question is about a specific version difference, mention both.

Keep responses focused and under 200 words unless the player needs a detailed walkthrough of a complex section.

${chapterContext ? `The player is currently on this chapter of the walkthrough:\n\n${chapterContext}` : ''}`;

  // Build history for the Claude inference server
  const chatHistory = [];
  if (Array.isArray(history)) {
    for (const msg of history.slice(-20)) {
      chatHistory.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        text: msg.text,
      });
    }
  }

  try {
    const response = await fetch(`${CLAUDE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CLAUDE_TOKEN}`,
      },
      body: JSON.stringify({
        message,
        systemPrompt,
        history: chatHistory,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Claude inference error:', data);
      return res.status(response.status).json({ error: data.error || 'AI service error.' });
    }

    return res.status(200).json({ reply: data.reply });
  } catch (err) {
    console.error('Claude inference error:', err);
    return res.status(500).json({ error: 'AI service error. Please try again.' });
  }
}
