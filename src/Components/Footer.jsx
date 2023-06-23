import React from 'react'
import { BsGithub,BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <footer className=' p-10 pb-6 flex flex-row justify-between items-end border'>
    <div>
        <span>Copyright @2023</span>
    </div>
    <div id='social-links' className='flex flex-row gap-6 text-2xl'>
      <Link to='https://github.com/Deepak-prajapat0' target='_blank' className='hover:text-blue-600'>
        <BsGithub className='cursor-pointer'/>
      </Link>
        <BsTwitter className='cursor-pointer hover:text-blue-600' />
    </div>
  </footer>
  )
}

export default Footer