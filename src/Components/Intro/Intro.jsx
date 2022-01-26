import React from 'react';
import {Instagram,LinkedIn, YouTube,GitHub,Twitter} from '@mui/icons-material'
function Intro() {
  return <div className='pt-16 h-screen flex'>
    <div className=' basis-1/4 pl-9'>
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
    <div className='pt-24'>
      <img className=' shadow-xl rounded-md' src="https://avatars.githubusercontent.com/u/88622950?v=4" alt="dp" />
    </div>
    </div>
    <div className='basis-3/4 pl-9 pr-24 pt-28 sm:text-right'>
     <h1 className='font-thin text-5xl'>I'm AKSHAY.</h1>
     <h1 className='font-bold text-4xl cursor-pointer hover:text-red-600'>React js Developer.</h1>
     <p className='font-normal text-3xl'>I’m a self-taught Software Developer. Experience in Reactjs and Javascript.</p>
    </div>
  </div>;

}

export default Intro;
