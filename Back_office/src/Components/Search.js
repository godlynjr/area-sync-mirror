import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input from "../Components/Input";

const Search = () => {
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    return (
          <div className="flex items-center rounded-[5px] m-[10px]">
            <Input
              text={search}
              style="bg-[#3e3d4] pl-[13px] h-[40px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
              handleSearchChange={handleSearchChange}
            />
            <div className="bg-[#3e3d45] h-[40px] px-[14px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]">
              <FaSearch color="white" />
            </div>
          </div>  
    );
};

export default Search;
