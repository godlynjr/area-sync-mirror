import React, { useState } from "react";
import logo from '../Assets/logo.svg';
import DropdownComponent from './DropdownComponent';

function Header() {

  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="w-full z-20 top-0 left-0">
        <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
          <img src={logo} alt="Logo" className="h-full w-[180px]" />

          <div className="hidden lg:flex space-x-12 h-full justify-center items-center text-black">
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">
                Explore
              </a>
              <a href="#" className="hover:underline">
                Explore
              </a>
              <a href="#" className="hover:underline">
                Categories
              </a>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </div>
            <a href="/register">
              <button className="w-[154px] h-[50px]">
                Get Started
              </button>
            </a>
          </div>
          <button className="h-full lg:hidden">
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

{/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={handleopen} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

  {open &&
  <div id="dropdown" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
  </div>
  } */}

      </nav>
    </div>
  );
}

export default Header;

