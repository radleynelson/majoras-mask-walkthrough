import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Simple in-memory rate limiting per IP
const rateLimits = new Map();
const RATE_LIMIT = 20; // requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateLimits.set(ip, { start: now, count: 1 });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests. Try again later.' });
  }

  const { message, chapterContext } = req.body;

  if (!message || typeof message !== 'string' || message.length > 1000) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  const systemPrompt = `You are a helpful Majora's Mask walkthrough assistant. You help players who are stuck or need guidance on The Legend of Zelda: Majora's Mask.

You are knowledgeable about both the N64 and 3DS versions. Give concise, practical advice. Use specific directions (north, south, east, west), item names, and enemy names. If a question is about a specific version difference, mention both.

Keep responses focused and under 200 words unless the player needs a detailed walkthrough of a complex section.

${chapterContext ? `The player is currently on this chapter of the walkthrough:\n\n${chapterContext}` : ''}`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const chat = model.startChat({
      history: [],
      generationConfig: { maxOutputTokens: 500 },
    });

    const result = await chat.sendMessage(`${systemPrompt}\n\nPlayer's question: ${message}`);
    const response = result.response.text();

    return res.status(200).json({ reply: response });
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({ error: 'AI service error. Please try again.' });
  }
}
