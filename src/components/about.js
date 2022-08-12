import React from 'react'
import '../index.css'


function About() {
  return (
    <>
      
      <h1 className='text-center text-2xl text-white py-4 px-8'>About Us</h1>    
      <div className='flex flex-col w-full items-center'>
      
      <div className='card w-96 md:w-8/12 bg-white shadow-xl mb-8'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-2xl'>Our Mission</h2>
          <p>To provide a way to keep track of how much your daily habits are costing you. </p>
        </div>
        <figure><img src={require('../assets/images/about.png')}  alt="people" /></figure>
      </div>

      <div className='card w-96 md:w-8/12 md:h-96 bg-base-100 shadow-xl image-full mb-8'>
        <figure><img src={require('../assets/images/bg-save.jpg')} alt="lady holding holo money" /> </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-2xl'>Our Story</h2>
          <p>We understand how daily habits can become difficult to keep track of. 
          Especially if your habit puts you in an altered state of mind. 
          We make it easy for you to keep track of your spending habits or 
          identify where you may need to trim down. </p>
          
        </div> 
      </div>

      <div className='card w-96 md:w-8/12 bg-secondary-content shadow-xl mb-8'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-2xl'>Trim Team</h2>
          <ul>
            <li><a className='link link-hover px-1' 
                href="https://github.com/khcarver1" target="_blank" rel="noopener noreferrer"> Kansas Carver</a></li>
            <li><a className='link link-hover px-1' 
                href="https://github.com/vhivestate" target="_blank" rel="noopener noreferrer">Valeria Garcia</a></li>
            <li><a className='link link-hover px-1' 
                href="https://github.com/GerusHays" target="_blank" rel="noopener noreferrer">Gerus Hays</a></li>
            <li><a className='link link-hover px-1' 
                href="https://github.com/sterlingpeck" target="_blank" rel="noopener noreferrer">Sterling Peck </a></li>
            <li><a className='link link-hover px-1' 
                href="https://github.com/lrpineda" target="_blank" rel="noopener noreferrer">Luis Pineda</a></li>
          </ul>
        </div>
      </div>

      <div className='card w-96 md:w-8/12 bg-base-100 shadow-xl mb-8'>
        <div className='card-body items-center text-center'>
          <h2 className='text-3xl'>Questions or Feedback?</h2>  
          <h2 className='card-title text-xl'>Contact Us</h2>
          <form className='form-control w-3/4' action="" id="contact-form" >
            <div className='form-control'>
              <label className='label' htmlFor="name">
                <span className='label-text'></span>
              </label>
              <input type="text" name="name"  placeholder="Name" className='input input-bordered'/>
            </div>
            <div className='form-control'>
              <label htmlFor="email" className='label'></label>
              <input type="email" name="email" placeholder="Email Address" className='input input-bordered'/>
            </div>
            <div className='form-control'>
              <label htmlFor="message" className='label'></label>
              <textarea name="message" rows="5"  placeholder="Your message" className="textarea textarea-bordered h-24"/>
            </div>
            <div class="form-control mt-6">
              <button className='btn btn-primary'>Submit</button>
            </div>
           </form>

        </div>
      </div>
    </div>
    </>
  )
}

export default About