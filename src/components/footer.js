import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Footer() {
  
  return (
    <footer className='footer footer-center p-10 bg-base-100 '>
        <div>
           <h1 className="btn btn-ghost normal-case text-2xl logo">
            TrimDown <img src={require('../assets/images/coin.png')} alt='coin' className="h-7 " />
          </h1>
          <p>&copy; 2022 - Trimm Team Inc by: 
          </p>
          <p>
          <a className='link link-hover px-1' 
                href="https://github.com/khcarver1" target="_blank" rel="noopener noreferrer"> Kansas Carver</a> 
            <a className='link link-hover px-1' 
                href="https://github.com/vhivestate" target="_blank" rel="noopener noreferrer">Valeria Garcia</a>
            <a className='link link-hover px-1' 
                href="https://github.com/GerusHays" target="_blank" rel="noopener noreferrer">Gerus Hays</a>
            <a className='link link-hover px-1' 
                href="https://github.com/sterlingpeck" target="_blank" rel="noopener noreferrer">Sterling Peck </a>
            <a className='link link-hover px-1' 
                href="https://github.com/lrpineda" target="_blank" rel="noopener noreferrer">Luis Pineda</a>
          </p>
        </div>
        <div>
          <div className='grid grid-flow-col gap-4'>
            <a className='btn btn-circle btn-primary' target="blank" href='https://github.com/GerusHays/Trim-Down' rel='noopener noreferrer'><FaGithub size={28} color="white" /></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer