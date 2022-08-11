import React from 'react'
import '../index.css'


function About() {
  return (
    <div className='aboutSec'>
    <div className='mission'>
      <h1>Our Mission</h1>
      <p>To provide a way to keep track of how much your daily habits are costing you. </p>
      </div>

    <div className='story'>
      <h2>Our Story</h2>
      <p>We understand how daily habits can become difficult to keep track of. Especially if your habit puts you in an altered state of mind. We make it easy for you to keep track of your spending habits or identify where you may need to trim down. </p>
    </div>

    <h2>Trim Team</h2>
      <div className='team'>
        <ul>
          <li>Kansas Carver</li>
          <li>Luis Pineda</li>
          <li>Gerus Hays</li>
          <li>Valeria Garcia</li>
          <li>Sterling Peck</li>
        </ul>
      </div>

      <div className='form'>
      <h2>Questions or Feedback?</h2>
      <h2>Contact Us</h2>
      <form className='contactForm' action="" id="contact-form" >
            <div>
              <label htmlFor="name"></label>
              <input type="text" name="name"  placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="email"></label>
              <input type="email" name="email" placeholder="Email Address"/>
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea name="message" rows="5"  placeholder="Your message"/>
            </div>

            <button>Submit</button>
          </form>
        </div>
    </div>

  )
}

export default About