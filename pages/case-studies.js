import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function CaseStudies(){
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Case Studies</h1>
        <article><h2>Document Ingestion Platform</h2><p>Converted large volumes of contracts into structured data.</p></article>
        <article><h2>LLM Chatbot for Internal Search</h2><p>Built retrieval pipelines for policy search and staff support.</p></article>
      </main>
      <Footer />
    </>
  )
}
