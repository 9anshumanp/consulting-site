import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Contact(){
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Contact</h1>
        <form method="post" action="/api/contact">
          <label>Name</label><input name="name" />
          <label>Email</label><input name="email" />
          <label>Message</label><textarea name="message"></textarea>
          <button className="btn" type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
