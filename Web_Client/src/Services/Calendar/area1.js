import React from "react"
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router-dom';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

function Area1() {
  const location = useLocation();

  const ConnectDiscord = () => {
    const currentPath = location.pathname;
    User.CalendarLogin(currentPath);
  }

  return (
    <div>
      <section className="bg-[#4285f4] text-white py-5">
        <Header />
        <div className="container mx-auto">
          {/* upper header */}
          <hr style={{
            background: 'black',
            color: 'black',
            borderColor: 'black',
            height: '1px',
          }} className='my-1'/>
          <div className="flex flex-row justify-between">
            <div className="inline-flex space-x-2 border-4 border-solid p-2 rounded-full">
              <ArrowLeftIcon
        
                  className="h-5 w-5 text-white mt-1"
                />
              <a href="/Discord" className="text-lg font-bold">Back</a>
            </div>
            <div className="border-4 border-solid p-2 rounded-full">
              <a href="https://discord.com" className="text-lg font-semibold">Visit Discord</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <div className="flex flex-row self-center space-x-2">
              <FaDiscord className="h-12 w-12"/>
              <FaCalendar className="h-12 w-12" />
            </div>
            <p className="text-xl">Chaque fois qu'un message est épinglé dans le serveur <br /> un évenement est créer dans google calendar. </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex text-center flex-col">
        <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center bg-[#4285f4]" onClick={ConnectDiscord}>Connect</button>
        <p className="self-center text-xl">Chaque fois qu'un message est épinglé dans le serveur <br />un évenement est créer dans google calendar.</p>
      </section>
    </div>
  )
}

export default Area1;
