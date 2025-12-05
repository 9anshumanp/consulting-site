import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Services(){
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Services</h1>
        <ul>
          <li>AI Architecture & Strategy</li>
          <li>Chatbot Development & RAG</li>
          <li>PDF → Structured Data Conversion</li>
          <li>Process Automation</li>
          <li>Data Engineering & Pipelines</li>
          <li>AI Governance & Model Risk</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
