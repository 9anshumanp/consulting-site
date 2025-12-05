import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <section className="services">
          <h2>Core Services</h2>
          <div className="grid">
            <div className="card"><img src="/images/services/ai_architecture.png" alt=""/><h3>AI Architecture</h3><p>Design scalable LLM & embedding systems, retrieval pipelines, and MLOps.</p></div>
            <div className="card"><img src="/images/services/chatbot.png" alt=""/><h3>Chatbots & RAG</h3><p>Custom chat assistants and knowledge retrieval solutions.</p></div>
            <div className="card"><img src="/images/services/pdf.png" alt=""/><h3>Document Intelligence</h3><p>PDF → structured data, OCR, table extraction.</p></div>
            <div className="card"><img src="/images/services/automation.png" alt=""/><h3>Automation</h3><p>Workflow automation and process improvements.</p></div>
            <div className="card"><img src="/images/services/data_engineering.png" alt=""/><h3>Data Engineering</h3><p>ETL, pipelines, dashboards and cloud migration.</p></div>
            <div className="card"><img src="/images/services/governance.png" alt=""/><h3>AI Governance</h3><p>Responsible AI, model risk, monitoring and compliance.</p></div>
          </div>
        </section>

        <section className="case-studies">
          <h2>Case Studies</h2>
          <div className="grid">
            <div className="card"><h3>Document Ingestion Platform</h3><p>Converted contracts to structured data with high accuracy for a corporate legal team.</p></div>
            <div className="card"><h3>Internal Knowledge Chatbot</h3><p>Built an LLM-powered search & chat tool for policy retrieval and staff helpdesk.</p></div>
          </div>
        </section>

        <section className="contact-cta">
          <h2>Get Started</h2>
          <p>Contact us to discuss a 2-hour audit or a pilot project.</p>
          <Link href="/contact"><a className="btn">Contact</a></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
