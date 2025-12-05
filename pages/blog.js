import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Blog(){
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Insights</h1>
        <article>
          <h2>Secure RAG pipelines — checklist</h2>
          <p>Short post describing best practices for retrieval‑augmented generation in regulated environments.</p>
        </article>
      </main>
      <Footer />
    </>
  )
}
