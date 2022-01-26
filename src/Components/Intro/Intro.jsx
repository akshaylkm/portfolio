import React from 'react';
import {Instagram,LinkedIn, YouTube,GitHub,Twitter} from '@mui/icons-material'
function Intro() {
  return <div className='pt-16 h-screen  sm:flex'>
    <div className=' basis-1/4 pl-9'>
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
    <div className=' pt-24 w-24 h-auto sm:w-auto sm:h-auto'>
      <img className=' shadow-xl rounded-md' src="https://avatars.githubusercontent.com/u/88622950?v=4" alt="dp" />
    </div>
    </div>
    <div className='basis-3/4 pl-9 pr-24 pt-9 sm:text-right sm:pt-28'>
     <h1 className='font-thin text-4xl sm:text-5xl'>I'm AKSHAY.</h1>
     <h1 className='font-bold text-4xl cursor-pointer hover:text-red-600'>React js Developer.</h1>
     <p className='font-normal text-xl sm:text-3xl'>I’m a self-taught Software Developer. Experience in Reactjs and Javascript.</p>
    </div>
  </div>;

}

export default Intro;
