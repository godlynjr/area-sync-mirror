import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input from "../Components/Input";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center rounded-[5px] m-[10px]">
      <Input
        type="text"
        placeholder="Search for..."
        style="bg-[#3e3d4] pl-[13px] h-[40px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}><div className="bg-[#3e3d45] h-[40px] px-[14px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]">
        <FaSearch color="white" />
      </div></button>
    </div>
  );
};

export default Search;
