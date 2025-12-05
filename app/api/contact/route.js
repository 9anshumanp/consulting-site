export async function POST(req) {
  const formData = await req.formData();
  console.log('contact', Object.fromEntries(formData.entries()));
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type':'application/json' }});
}
