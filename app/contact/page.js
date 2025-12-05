'use client';
export default function Contact(){
  return (
    <main className='container page'>
      <h1>Contact</h1>
      <form method='post' action='/api/contact' className='form'>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' required />
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='email' required />
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' rows='6' required></textarea>
        <button className='btn' type='submit'>Send</button>
      </form>
    </main>
  )
}
