import React from 'react';
import logo from '../Assets/logo.svg';
import LoginForm from '../RegisterForm';

function Header() {
  return (
    <div>
      <nav className="text-black p-4 flex items-center">

        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="relative inline-block text-left group">
          <button className="text-black focus:outline-none">
            Langue
          </button>
        </div>

        <span className="text-black">|</span>

        <a href="#" className="text-black hover:underline">Explore</a>

        <div className="relative inline-block text-left group">
          <button className="text-black hover:underline focus:outline-none">
            Categories
          </button>
        </div>

        <a href="/login" className="text-black hover:underline">Login</a>


        <a href="#" className="text-black hover:underline">Get Started</a>
      </nav>
    </div>
  );
}

export default Header;
