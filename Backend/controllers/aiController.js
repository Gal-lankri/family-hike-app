import { OpenAI } from "openai/client.js";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAiRecommendations(req, res) {
  try {
    // 1. read filters from request body
    const filters = req.body || {};

    // 2. pre-filter hikes in SQL for performance
    const candidateHikes = await getFilteredHikesFromDB(filters);

    // 3. build a short JSON to send to GPT (≤ 4-6 KB is fine)
    const shortlist = candidateHikes.slice(0, 15); // keep prompt small

    const prompt = `
You are "HikeBot", an expert at suggesting family-friendly hikes in Israel.

Candidate hikes (JSON):
${JSON.stringify(shortlist, null, 2)}

User filters: ${JSON.stringify(filters)}

Return exactly 3 hike objects from the list with a 1-sentence reason each:
[
  { "id": "...", "reason": "..." },
  ...
]
`;

    // 4. call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      messages: [
        { role: 'system', content: prompt },
      ],
    });

    // 5. parse and send back
    const recommendations = JSON.parse(completion.choices[0].message.content);
    res.json(recommendations);
  } catch (err) {
    console.error('AI recommend error:', err);
    res.status(500).json({ error: err.message || 'AI error' });
  }
}