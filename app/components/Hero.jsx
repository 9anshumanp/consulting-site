'use client';
export default function Hero(){
  return (
    <header className='hero'>
      <div className='hero-inner'>
        <div className='hero-copy'>
          <h1 className='hero-title'>PrimeLogic — AI & Data Consulting</h1>
          <p className='hero-sub'>AI architecture, secure generative systems, document intelligence, and automation for regulated organizations.</p>
          <a className='btn' href='/contact'>Get Started</a>
        </div>
        <div className='hero-image'>
          <img src='/images/hero.jpg' alt='hero' />
        </div>
      </div>
    </header>
  )
}
