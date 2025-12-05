export default function Navbar(){
  return (
    <nav className="nav">
      <div className="brand"><img src="/images/logo.png" alt="logo"/><span>PrimeLogic</span></div>
      <div className="links">
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/blog">Blog</a>
        <a className="cta" href="/contact">Contact</a>
      </div>
    </nav>
  )
}
