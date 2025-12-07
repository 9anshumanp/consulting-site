export async function POST(req) {
  const { message } = await req.json();
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return new Response(
      JSON.stringify({
        reply: `Demo: you asked "${message}". Add OPENAI_API_KEY in Vercel env vars for live responses.`
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
        max_tokens: 300,
      }),
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'No reply';
    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ reply: 'Error: ' + String(err) } ),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
