export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body || {};
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return res.status(200).json({ reply: `Demo: you asked "${message}". For a live demo, add an OpenAI API key in environment variables.`});
  }
  try {
    const openRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
        max_tokens: 300
      })
    });
    const j = await openRes.json();
    const reply = j.choices?.[0]?.message?.content || 'No reply';
    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ reply: 'Error: '+String(err) });
  }
}
