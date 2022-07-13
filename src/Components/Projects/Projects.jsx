import React from "react";
import yt from "../../Images/yt.jpg";
function Projects() {
  return (
    <div data-aos="fade-up" className=" h-auto pl-9">
      <h1 className=" pt-9 font-medium text-xl sm:text-4xl">
        SOME OF MY PERSONAL PROJECTS IN UI 
      </h1>
      <div className="pr-4 sm:flex flex-wrap justify-center items-center pt-24">
      
        <a href="https://akshaylkm.github.io/wtc-social-media-app/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src="https://i.ytimg.com/vi/NljIHlZRTTE/maxresdefault.jpg"
            alt="img"
          />
        </a>
        <a href="https://akshaylkm.github.io/test/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src={yt}
            alt="img"
          />
        </a>
        
      </div>
      <div className=" pt-10 sm:pt-32 h-96">
        <h1 className="font-medium text-2xl sm:text-4xl">
          Have an idea let's build it.
        </h1>
        <p className="pr-1 text-xl font-extralight sm:text-2xl">
          Feel free to reach out if you’re in need of a Developer. Whether that
          means you need a website,
          <br /> web app, or you’re looking to fill a full-time position. I’m
          always open to a conversation.
        </p>
      </div>
    </div>
  );
}

export default Projects;
