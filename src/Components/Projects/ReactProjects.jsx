import React from 'react'
import expenseImg from "../../Images/expense.png";
import HelloApp from "../../Images/h.JPG";
import todo from "../../Images/todo.JPG";

function ReactProjects() {
  return (
    <div data-aos="fade-up" className=" h-auto pl-9">
      <h1 className=" pt-9 font-medium text-xl sm:text-4xl">
        SOME OF MY PERSONAL PROJECTS IN REACT JS
      </h1>
      <div className="pr-4 sm:flex flex-wrap justify-center items-center pt-24">
        <a href="https://akshaylkm.github.io/netflix/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt="img"
          />
        </a>
        <a href="https://akshaylkm.github.io/Expense/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src={expenseImg}
            alt="img"
          />
        </a>
        <a href="https://akshaylkm.github.io/ToDo/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src={todo}
            alt="img"
          />
        </a>
        <a href="https://akshaylkm.github.io/HelloApp/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src={HelloApp}
            alt="img"
          />
        </a>
        <a href="https://akshaylkm.github.io/counter-responsive/">
          <img
            className=" w-96 h-34 mr-9 mb-5 sm:hover:scale-125 shadow-xl"
            src="https://store-images.s-microsoft.com/image/apps.32388.9007199266655303.9a968b1f-98f8-41ae-b822-eefdea30416f.8a1c0f7b-c155-48fc-a4cb-7b4e980dba35?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg"
            alt="img"
          />
        </a>
      </div>
    </div>
  )
}

export default ReactProjects