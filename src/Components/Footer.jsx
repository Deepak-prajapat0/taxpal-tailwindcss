import React from 'react'
import { BsGithub,BsTwitter } from "react-icons/bs";

function Footer() {
  return (
  <footer className=' p-10 pb-6 flex flex-row justify-between items-end border'>
    <div>
        <span>Copyright @2023</span>
    </div>
    <div id='social-links' className='flex flex-row gap-6 text-2xl'>
        <BsGithub className='cursor-pointer'/>
        <BsTwitter className='cursor-pointer'/>
    </div>
  </footer>
  )
}

export default Footer