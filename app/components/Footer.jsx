'use client';
export default function Footer(){
  return (
    <footer className='footer'>
      <div>© {new Date().getFullYear()} PrimeLogic Consulting</div>
      <div className='muted'>AI Architecture · Chatbots · Document Intelligence · Automation</div>
    </footer>
  )
}
