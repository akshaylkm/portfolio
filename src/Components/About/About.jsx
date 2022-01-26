import React from 'react';
import {Instagram,LinkedIn, YouTube,GitHub,Twitter} from '@mui/icons-material'
function About() {
  return <div className=' flex justify-between content-centerh-24 px-8'>
      <h1 className='text-xl font-semibold'>AKSHAY <span className='font-light'>K</span>M</h1>
      <span>akshaykm194@gmail.com</span>
      <ul className='flex'>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <Instagram/>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <LinkedIn/>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <YouTube/>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <GitHub/>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <Twitter/>
      </li>
    </ul>
  </div>;
}

export default About;
