import React, { useState, useEffect } from "react";
import logo from '../Assets/as.png';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';

function Header() {

  const [path, setPath] = useState(true);
  const [open, setOpen]=useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  // if (currentPath === '/') {
  //   setPath(false);
  // }

  const Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/"},
  ];

  useEffect(() => {
    if (currentPath === '/') {
      setPath(false);
    }
  }, [currentPath]);

  return (
    <div>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      <nav className="w-full z-20 top-0 left-0">
        <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
          <img src={logo} alt="Logo" className="h-[60px] w-[60px]" />
          {!path &&
            <div>
              <div className="hidden lg:flex space-x-12 h-full justify-center items-center text-black">
                <div className="flex space-x-6">
                  <a href="/login" className="hover:underline">
                    Login
                  </a>
                </div>
                <a href="/register" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-figma-yellow rounded-3xl">
                  Get Started
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
                <button className="h-full lg:hidden" onClick={()=>setOpen(!open)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-full"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                  </svg>
                </button>
              </div>
            </div>
            
          }
          {path &&
            <div className="lg:flex space-x-12 h-full justify-center items-center text-black">
              <a href="/profile" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-3xl">
                <HiOutlineUserCircle className="h-10 w-10"/>
              </a>
            </div>
          }
          {open &&
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>}
        </div>
      </nav>
    </div>
  );
}

export default Header;

