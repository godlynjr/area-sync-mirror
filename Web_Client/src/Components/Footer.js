import React, { useState, useEffect } from "react";
import linkedin from '../Assets/linkedin.svg'
import insta from '../Assets/insta.svg'
import x from '../Assets/x.svg'

function Footer() {
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='bg-blue-200'>
      <div className='max-sm:p-5 container mx-auto text-black'>
        <h2 className='text-2xl' >Get new updates in <br /> your mailbox</h2>
        <label
          htmlFor="exampleCheckbox"
          className="inline-flex items-center"
        >
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
          {/* Actual checkbox input */}
          <input
            type="checkbox"
            id="exampleCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          {/* Label text */}
          <span className="ml-2">
            I agree with AREASYNC’s{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="underline">
              Pricacy
            </a>{" "}
          </span>
        </label>
        <hr style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '1px',
        }} className='my-5'/>

        <p>Directly to</p>
        <p>Login</p>
        <p>About us</p>
        <p>Explore</p>
        <p>Updates</p>
        <p>Categories</p>

        <hr style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '1px',
        }} className='my-5'/>

        <div className='flex flex-col'>
          <a href='/login'>infos@areasync.com</a>

          <div className='flex space-x-2 my-6'>
            <img src={linkedin}></img>
            <img src={insta}></img>
            <img src={x}></img>
          </div>

          <a>Privacy policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer