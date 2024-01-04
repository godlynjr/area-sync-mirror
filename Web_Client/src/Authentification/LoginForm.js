import React, { useState } from "react";
import CustomButton from "../Components/AuthButton";
import User from "../User"
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ user, setUser ] = useState([]);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", { email, password });
    User.log(email, password);
  };

  const signWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      // console.log(codeResponse)
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          User.log(res.data.email, res.data.id);
        })
        .catch((err) => console.log(err));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 bg-figma-green">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex lg:col-span-1">
          <div className="absolute inset-0 bg-zinc-900" />
        </div>

        <div className="lg:p-8 lg:col-span-2 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
            <h1 className="text-center font-bold text-2xl">
              Sign In to AREASYNC
            </h1>
            <div className="flex flex-col">
              <CustomButton
                color="blue"
                logo="path/to/blue-logo.png"
                description="Sign in with Google"
                onClick={() => signWithGoogle()}
              />
              <div className="relative">
                <div className="relative flex justify-center text-xs py-3">
                  <span className="bg-background text-muted-foreground">
                    Or sign in with email
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={handleEmailChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-black hover:text-gray-800"
                      >
                        Forgot?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={handlePasswordChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <a href="/login">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="flex w-full justify-center rounded-3xl bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign In
                    </button>
                  </a>
                </div>
              </form>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account ?{" "}
              <a
                href="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
