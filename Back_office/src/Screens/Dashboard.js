import React from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/NavBar";
import StatusCard from "../Components/StatusCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="basis-[15%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[85%] border">
        <NavBar />
        <div className="block rounded-lg p-6">
            <h1 className="sm:text-[27px] md:text-[29px] text-[31px] text-black-900 text-shadow-ts font-bold font-roboto">
              DASHBOARD
            </h1>
        </div>
        <div className="grid grid-cols-4 gap-[30px] ml-4 mt-[25px] pb-[15px]">
            <StatusCard color={"text-purple-600 text-sm leading-4 font-bold"} text={"Services"} Numbers={"7"} Icon={<FontAwesomeIcon icon={faServer} style={{color: "#000000", fontSize: "30px"}} />}/>
            <StatusCard color={"text-orange-600 text-sm leading-4 font-bold"} text={"Nb Users"} Numbers={"200"} Icon={<FontAwesomeIcon icon={faUsers} style={{color: "#000000", fontSize: "30px"}} />}/>
            <StatusCard color={"text-red-600 text-sm leading-4 font-bold"} text={"Requests"} Numbers={"342"} Icon={<FontAwesomeIcon icon={faCodePullRequest} style={{color: "#000000", fontSize: "30px"}} />}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
