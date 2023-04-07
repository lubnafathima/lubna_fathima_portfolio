import React from 'react'

function Contact() {
  return (
    <div className='Contact'>
      <div className='ContactLeft'>
        <h1>Contact</h1>
        <p>I would to hear about your project and how I could help. Please fill in the form, abd l'll get back to you as soon as possible.</p>
      </div>
      <div className='ContactRight'>
        <form>
          <input type='text' placeholder='NAME' />
          <input type='email' placeholder='EMAIL' />
          <textarea type='text' row="20" col="50c" placeholder='MESSAGE' />
        </form>
        <a type='submit'>send message</a>
      </div>
    </div>
  )
}

export default Contact