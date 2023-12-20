import React from "react";
import { FaRegBell, FaUser } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="flex items-center justify-end h-[70px] shadow-lg px-[25px]">
          <div className="flex items-center gap-3">
            <a href="#"><FaRegBell /></a>
            <p>Admin</p>
            <div>
            <a href="#"><FaUser /></a>
            </div>
          </div>
        </div>
    );
};

export default NavBar;
