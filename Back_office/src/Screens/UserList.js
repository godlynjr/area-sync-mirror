"use client";
import React from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/NavBar";

const UserList = () => {
    return (
      <div className="flex">
        <div className="basis-[15%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[85%] border">
            <NavBar />
          <div className="block rounded-lg p-6">
            <h1 className="sm:text-[27px] md:text-[29px] text-[31px] text-black-900 text-shadow-ts font-bold font-roboto">
              List of Users
            </h1>
          </div>
        </div>
      </div>
    );
  };

export default UserList;
