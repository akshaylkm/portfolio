import React from 'react';
import {Instagram,LinkedIn, YouTube,GitHub,Twitter} from '@mui/icons-material'
function About() {
  return <div className=' flex justify-between content-centerh-24 px-8'>
      <h1 className='text-xl font-semibold'>AKSHAY <span className='font-light'>K</span>M</h1>
      <ul className='flex'>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <a href="https://www.instagram.com/akshay.kmadhu/"><Instagram/></a>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <a href="https://www.linkedin.com/in/akshaylkm/"><LinkedIn/></a>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <YouTube/>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <a href="https://github.com/akshaylkm"><GitHub/></a>
      </li>
      <li className='mr-6 cursor-pointer opacity-50 hover:opacity-100'>
        <a href="https://twitter.com/akshaylkm"><Twitter/></a>
      </li>
    </ul>
  </div>;
}

export default About;
