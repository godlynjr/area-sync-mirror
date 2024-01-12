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
    <div className="container mx-auto">
      <div className='max-sm:p-5 py-12 text-black'>
        <h2 className='text-5xl font-light' >Get new updates in <br /> your mailbox</h2>
        <p className="my-2">Email address </p>
        <label
          htmlFor="exampleCheckbox"
          className="items-center"
        >
        <div className="mt-2">
          <input
            id="password"
            placeholder="name@example.com"
            name="password"
            type="mail"
            autoComplete="current-password"
            onChange={handleChange}
            required
            className="block w-[250px] rounded-md border-0 py-1.5 p-1"
          />
        </div>
          {/* Actual checkbox input */}
          <input
            type="checkbox"
            id="exampleCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-300 mt-1.5"
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

        
        <div>

        </div>
        <div className='flex flex-col space-y-2'>
          <a href='/login'>infos@areasync.com</a>
          
          <div>
            
          </div>
          <div className='flex space-x-2 my-6 lg:my-0'>
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