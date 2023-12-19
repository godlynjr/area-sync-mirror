import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaTachometerAlt, FaChevronRight } from "react-icons/fa";
import logo from '../assets/white-logo.png';

const Sidebar = () => {
    return (
        <div className='bg-[#3e3d45] h-screen rounded-r-lg'>
            <div className='py-[20px] flex items-center justify-center border-b-[1px]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
            </div>
            <div className= 'flex items-center gap-[15px] px-[20px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <FaTachometerAlt color= 'white' />
                <p className= 'text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
            </div>
            <a href='/UserList'><div className= 'flex items-center gap-[15px] px-[20px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <FontAwesomeIcon icon={faUser} style={{color: "#ffffff"}} />
                <p className= 'text-[14px] leading-[20px] font-bold text-white pr-[15px]'>List of Users</p>
                <FaChevronRight className="transition-transform duration-200 hover:translate-x-1" color= 'white' />
            </div></a>
            <div className='pt-[50px]'>
                <img src={logo}></img>
            </div>
        </div>
    );
};

export default Sidebar;