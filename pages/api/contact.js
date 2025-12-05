export default async function handler(req, res){
  // Simple placeholder - in production hook to SendGrid or SMTP
  const body = req.body || {};
  console.log('contact form', body);
  return res.status(200).json({ ok: true });
}
