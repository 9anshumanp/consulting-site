export async function POST(req) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData.entries());
  console.log('contact form', data);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
