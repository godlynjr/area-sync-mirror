import React, { useState , useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/NavBar";
import StatusCard from "../Components/StatusCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Infos from "../Data/Manage.js";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    (async () => {
        try {
            const data = await Infos.getStats();
            const elems = [
              { label: "Services", color: "purple-600", value: data.services, icon: faServer },
              { label: "Nb Users", color: "orange-600", value: data.users, icon: faUsers },
            ];
            setStats(elems);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    })();
}, []);
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
          {stats.map((item) => (
            <StatusCard
              key={item.label} // Assuming each item has a unique label property
              color={`text-${item.color} text-sm leading-4 font-bold`}
              text={item.label}
              Numbers={item.value}
              Icon={<FontAwesomeIcon icon={item.icon} style={{ color: "#000000", fontSize: "30px" }} />}
            />
          ))}
        </div>

        {/* <div className="grid grid-cols-4 gap-[30px] ml-4 mt-[25px] pb-[15px]">
            <StatusCard color={"text-purple-600 text-sm leading-4 font-bold"} text={"Services"} Numbers={"7"} Icon={<FontAwesomeIcon icon={faServer} style={{color: "#000000", fontSize: "30px"}} />}/>
            <StatusCard color={"text-orange-600 text-sm leading-4 font-bold"} text={"Nb Users"} Numbers={"200"} Icon={<FontAwesomeIcon icon={faUsers} style={{color: "#000000", fontSize: "30px"}} />}/>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
