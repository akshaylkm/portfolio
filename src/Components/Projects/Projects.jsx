import React from 'react';
function Projects() {
  return <div className=' h-screen pl-9'>
      <h1 className='font-medium text-4xl'>SOME OF MY WORKS AND PERSONAL PROJECTS</h1>
      <div className='flex justify-center items-center pt-24'>
        <a href="https://akshaylkm.github.io/netflix/"><img className=' w-96 h-34 mr-9 hover:scale-125 shadow-xl' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="img" /></a>
        <a href="https://akshaylkm.github.io/wtc-social-media-app/"><img className=' w-96 h-34 mr-9 hover:scale-125 shadow-xl' src="https://i.ytimg.com/vi/NljIHlZRTTE/maxresdefault.jpg" alt="img" /></a>
        <a href="https://akshaylkm.github.io/counter-responsive/"><img className=' w-96 h-34 mr-9 hover:scale-125 shadow-xl' src="https://store-images.s-microsoft.com/image/apps.32388.9007199266655303.9a968b1f-98f8-41ae-b822-eefdea30416f.8a1c0f7b-c155-48fc-a4cb-7b4e980dba35?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg" alt="img" /></a>
      </div>
      <div className='pt-32'>
        <h1 className='font-medium text-4xl'>Have an idea let's build it.</h1>
        <p className='text-2xl font-extralight'>Feel free to reach out if you’re in need of a Developer.
           Whether that means you need a website,<br /> web app, or you’re looking to fill a full-time position.
            I’m always open to a conversation.</p>
      </div>
  </div>;
}

export default Projects;
