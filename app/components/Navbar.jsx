'use client';
import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className='nav'>
      <div className='nav-inner'>
        <div className='brand'>
          <img src='/images/logo.png' alt='logo' className='logo' />
          <span className='brand-text'>PrimeLogic</span>
        </div>
        <div className='links'>
          <Link href='/services'>Services</Link>
          <Link href='/case-studies'>Case Studies</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/contact'><a className='cta'>Contact</a></Link>
        </div>
      </div>
    </nav>
  )
}
