import React, { useState } from "react";
import CustomButton from "../Components/AuthButton";
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { signInWithGoogle } from "./Firebase";

const RegisterForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

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
    console.log("Registring with:", { email, password });

    // fetch('http://localhost:8181/auth/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: email,
    //     password: password,
    //   }),
    // })
    // .then(response => response.json())
    //   .then(data => {
    //     // // Stockage du token (à faire en fonction de votre mécanisme choisi)
    //     // // Par exemple, en utilisant localStorage
    //     // localStorage.setItem('authToken', data.token);

    //     // // Redirection vers la page d'accueil ou une autre page sécurisée
    //     // window.location.href = '/accueil';
    //     console.log(data)
    //   })
    //   .catch(error => {
    //     console.error('Erreur de connexion :', error);
    //   });
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Logging in with Google");
  };

  const handleContinueWithEmail = () => {
    setIsRegistering(true);
  };

  const handleBackSignUp = () => {
    setIsRegistering(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className=" relative min-h-screen flex w-full lg:px-0 bg-figma-green">
        <div className="relative max-md:hidden bg-muted p-10 text-white dark:border-r w-1/3 min-h-screen">
          <div className="absolute inset-0 bg-zinc-900" />
        </div>

        {isRegistering ? (
          <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:flex w-2/3">
              <ArrowLeftIcon onClick={handleBackSignUp} className="h-5 w-5 text-gray-500" />

              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="AREASYNC"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign Up to AREASYNC
                </h2>
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
                          Forgot password?
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
                    {/* Label for the checkbox */}
                    <label
                      htmlFor="exampleCheckbox"
                      className="inline-flex items-center"
                    >
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
                  </div>
                  <div>
                    <a href="/login">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign Up
                      </button>
                    </a>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an account ?{" "}
                  <a
                    href="/login"
                    className="font-semibold leading-6 text-black hover:text-gray-800"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:flex w-2/3">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
              <h1 className="text-center font-bold text-2xl">
                Sign Up to AREASYNC
              </h1>
              <div className="flex flex-col">
                <CustomButton
                  color="blue"
                  logo="path/to/blue-logo.png"
                  description="Sign up with Facebook"
                />
                <CustomButton
                  color="blue"
                  logo="path/to/blue-logo.png"
                  description="Sign up with Microsoft"
                />
                <CustomButton
                  onClick={signInWithGoogle}
                  color="blue"
                  logo="path/to/blue-logo.png"
                  description="Sign up with Google"
                />
                <div className="relative">
                  <div className="relative flex justify-center text-xs py-3">
                    <span className="bg-background text-muted-foreground">
                      or
                    </span>
                  </div>
                </div>
              </div>
              <CustomButton
                onClick={handleContinueWithEmail}
                logo="path/to/blue-logo.png"
                description="Continue with Email"
              />

              <p className="px-8 text-center text-sm text-muted-foreground">
                By creating your account, you agree to our{" "}
                <a
                  href="#"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <p className="px-8 text-center text-sm text-muted-foreground">
                Already have an account ?{" "}
                <a
                  href="/login"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
