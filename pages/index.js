import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { who: "bot", text: "Welcome — ask me about our demo chat or services!" }
  ]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!msg.trim()) return;
    const userMsg = msg;
    setChat(c => [...c, { who: "you", text: userMsg }]);
    setMsg("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      setChat(c => [...c, { who: "bot", text: data.reply }]);
    } catch (e) {
      setChat(c => [...c, { who: "bot", text: "Demo error: " + e.message }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 900, margin: "auto" }}>
      <header>
        <h1>PrimeLogic Consulting</h1>
        <p>AI • Data • Automation — fractional leadership & delivery</p>
      </header>

      <section style={{ marginTop: 24 }}>
        <h2>Services</h2>
        <ul>
          <li>AI strategy & fractional leadership</li>
          <li>Data engineering & pipelines</li>
          <li>Automation, dashboards & chatbot pilots</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Live Demo Chat</h2>
        <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
          <div style={{ minHeight: 140 }}>
            {chat.map((c, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <small style={{ color: c.who === "bot" ? "#0b63ff" : "#444" }}>{c.who === "bot" ? "Assistant" : "You"}:</small>
                <div style={{ marginLeft: 8 }}>{c.text}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <input
              style={{ flex: 1, padding: "8px 10px" }}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ask demo: e.g., 'How would you automate reporting?'"
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button onClick={send} disabled={loading} style={{ padding: "8px 12px" }}>
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
          This demo uses a serverless API on Vercel. For production, connect to a model provider (OpenAI/Anthropic) and secure the API key in environment variables.
        </p>
      </section>

      <footer style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 16 }}>
        <small>© {new Date().getFullYear()} PrimeLogic Consulting — contact@primelogic.ai</small>
      </footer>
    </main>
  );
}
