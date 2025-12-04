export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { message } = req.body || {};

  // If you add an OpenAI API key as VERCEL env var OPENAI_API_KEY,
  // the code below will call the OpenAI ChatCompletions (example).
  // Otherwise, it returns a small canned reply for demo.

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    // Demo fallback response (no external API)
    const reply = `Demo: you asked "${message}". Example response: I'd suggest starting with a 2-hour automation audit, then a 4-week pilot.`;
    return res.json({ reply });
  }

  // Proxy to OpenAI (example using fetch)
  try {
    const openRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // replace with model you have access to
        messages: [{ role: "user", content: message }],
        max_tokens: 300
      })
    });

    if (!openRes.ok) {
      const text = await openRes.text();
      return res.status(500).json({ reply: `OpenAI error: ${text}` });
    }
    const j = await openRes.json();
    const reply = j.choices?.[0]?.message?.content || "No reply";
    return res.json({ reply });
  } catch (err) {
    return res.status(500).json({ reply: "Server error: " + String(err.message) });
  }
}
