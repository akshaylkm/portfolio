import React from 'react';

function NavBar() {
  return <div className=" h-24 p-9">
          <ul className='flex justify-between text-xl font-semibold'>
              <li className=' cursor-pointer'>AKSHAY <span className='font-light'>K</span>M</li>
              <li className='cursor-pointer font-light'>PROJECTS</li>
          </ul>
      </div>;
}

export default NavBar;
