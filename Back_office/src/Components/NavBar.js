import React, { useState } from "react";
import { FaSearch, FaRegBell, FaUser } from "react-icons/fa";
import Input from "../Components/Input";

const NavBar = () => {
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
          <div className="flex items-center rounded-[5px] m-[10px]">
            <Input
              text={search}
              style="bg-[#F8F9FC] pl-[13px] h-[40px] outline-none w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
              handleSearchChange={handleSearchChange}
            />
            <div className="bg-[#3e3d45] h-[40px] px-[14px] flex items-center justify-center rounded-tr-[5px] rounded-br[5px]">
              <FaSearch color="white" />
            </div>
          </div>
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
