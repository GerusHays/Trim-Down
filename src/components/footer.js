import React from 'react'
import { FaFire, FaPoo, FaBeer, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer footer-center p-10 bg-base-100'>
        <div className='grid grid-flow-col gap-4'>
            <a className='link link-hover'> About Us</a>
            <a className='link link-hover'> Jobs</a>
        </div>
        <div>
            <div className='grid grid-flow-col gap-4'>
                <a href='https://github.com/GerusHays/Trim-Down'><FaGithub size="28" /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer