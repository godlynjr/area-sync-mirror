import React, { useState } from "react";
import logo from "../assets/white-logo.png";
import Infos from "../Data/Manage.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    if (Infos.login(email, password) === false)
      setErrorMessage("Bad email or password. Try again.");
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-[#3e3d45]">
      <div className="md:w-1/3 max-w-sm">
        <img src={logo} alt="app logo" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleSubmit}>
            Login
          </button>
        </div>
        {errorMessage && <div className="text-xl text-red-600 text-center mt-4">{errorMessage}</div>}
      </div>
    </section>
  );
};

export default LoginForm;
