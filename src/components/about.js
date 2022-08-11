import React from 'react'
import '../index.css'


function About() {
  return (
    <div className='aboutSec'>
            <h1>Our Mission</h1>
     <div className='mission'>
         <p>To provide a way to keep track of how much your daily habits are costing you. </p>
      </div>

      <h1>Our Story</h1>
    <div className='story'>
      <p>We understand how daily habits can become difficult to keep track of. Especially if your habit puts you in an altered state of mind. We make it easy for you to keep track of your spending habits or identify where you may need to trim down. </p>
    </div>

    <h1>Trim Team</h1>
      <div className='team'>
        <ul>
          <li><a href='https://github.com/khcarver1'>Kansas Carver</a></li>
          <li><a href='https://github.com/lrpineda'>Luis Pineda</a></li>
          <li><a href='https://github.com/GerusHays'>Gerus Hays</a></li>
          <li><a href='https://github.com/vhivestate'>Valeria Garcia</a></li>
          <li><a href='https://github.com/sterlingpeck'>Sterling Peck</a></li>
        </ul>
      </div>

      <h1>Questions or Feedback?</h1>
      <h1>Contact Us</h1>
      <div className='form'>

      <form>
            <div className='contactForm'>
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
            </div>
            
          </form>
          <button>Submit</button>
        </div>
    </div>

  )
}

export default About