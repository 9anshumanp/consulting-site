import Hero from './components/Hero'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <section className="container services">
        <h2 className="section-title">Core Services</h2>
        <div className="grid">
          <div className="card"><img src="/images/services/ai_architecture.png" alt="AI"/><h3>AI Architecture</h3><p>Design scalable LLM & embedding systems, retrieval pipelines, and MLOps.</p></div>
          <div className="card"><img src="/images/services/chatbot.png" alt="Chatbot"/><h3>Chatbots & RAG</h3><p>Custom chat assistants and knowledge retrieval solutions.</p></div>
          <div className="card"><img src="/images/services/pdf.png" alt="PDF"/><h3>Document Intelligence</h3><p>PDF → structured data, OCR, table extraction.</p></div>
          <div className="card"><img src="/images/services/automation.png" alt="Automation"/><h3>Automation</h3><p>Workflow automation and process improvements.</p></div>
          <div className="card"><img src="/images/services/data_engineering.png" alt="Data"/><h3>Data Engineering</h3><p>ETL, pipelines, dashboards and cloud migration.</p></div>
          <div className="card"><img src="/images/services/governance.png" alt="Governance"/><h3>AI Governance</h3><p>Responsible AI, model risk, monitoring and compliance.</p></div>
        </div>
        <div style={{textAlign:'center', marginTop:24}}>
          <Link href="/contact"><a className="btn">Schedule a 2-hour audit</a></Link>
        </div>
      </section>
    </main>
  )
}
