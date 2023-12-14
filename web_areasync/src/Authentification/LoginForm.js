import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Components/AuthButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Logging in with Google");
  };

  return (
    <>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex lg:col-span-1">
          <div className="absolute inset-0 bg-zinc-900" />
        </div>

        <div className="lg:p-8 lg:col-span-2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
            <h1 className="text-center font-bold text-2xl">
              Sign In to AREASYNC
            </h1>
            <div className="flex flex-col">
              <CustomButton
                color="blue"
                logo="path/to/blue-logo.png"
                description="Sign in with Facebook"
              />
              <CustomButton
                color="blue"
                logo="path/to/blue-logo.png"
                description="Sign in with Microsoft"
              />
              <CustomButton
                color="blue"
                logo="path/to/blue-logo.png"
                description="Sign in with Google"
              />
              <div className="relative">
                <div className="relative flex justify-center text-xs py-3">
                  <span className="bg-background text-muted-foreground">
                    Or sign in with email
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <lqbel htmlFor="password">Password</lqbel>
              <lqbel id="password" type="password" />
            </div>
            <button className="w-full">Sign in</button>
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              By creating your account, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p> */}

            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account ?{" "}
              <Link
                href="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
