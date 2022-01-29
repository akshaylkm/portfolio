import React from 'react';

function Skills() {
  return <div className='h-screen sm:flex'>
      <div data-aos="fade-right" className=' basis-1/2 p-5 sm:pl-9'>
      <h1 className='font-bold text-3xl sm:text-4xl'>MY SKILLS</h1>
      <p className='font-extralight text-md pt-7 sm:text-2xl'>From the beginning days of when I first got into software development up until now, I’ve learned and gained a solid understanding of web development standards, the importance of reusability/scalability in large enterprise applications, and how user expereince means everything.</p>
      </div>
      <div data-aos="fade-right" className='basis-1/2 pl-9 pt-1 pb-7 sm:pt-20'>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>Javascript ES6</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>REACT JS</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>GO</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>FRONT END DEVELOPMENT</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>GIT</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>HTML5</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>CSS</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>TAILWIND CSS</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>PRODUCT DESIGN</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>RESEARCH AND DEVELOPMENT</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>PRODUCT MANAGEMENT</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>FIGMA</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>UI DESIGN AND DEVELOPMENT</button>
          <button className=' rounded-sm bg-slate-100 mr-5 mb-3 px-2'>PRESENTATION SKILL</button>
      </div>
  </div>;
}

export default Skills;
