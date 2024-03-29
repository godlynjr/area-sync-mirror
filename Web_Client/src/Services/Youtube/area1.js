import React from "react"
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router-dom';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub, FaYoutube, FaGoogleDrive } from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

function Area1() {
  const location = useLocation();

  const ConnectDrive = () => {
    const currentPath = location.pathname;
    User.DriveLogin(currentPath);
  }

  return (
    <div>
      <section className="bg-[#ff0000] text-white py-5">
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
              <a href="https://youtube.com" className="text-lg font-semibold">Visit YouTube</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <div className="flex flex-row self-center space-x-2">
              <FaYoutube className="h-12 w-12"/>
              <FaGoogleDrive className="h-12 w-12" />
            </div>
            <p className="text-xl">Apres un like sur une vidéo ses infos sont automatiquement ajoutée sur google drive. </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex text-center flex-col">
        <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center bg-[#ff0000]" onClick={ConnectDrive}>Connect</button>
        <p className="self-center text-xl">Apres un like sur une vidéo ses infos sont automatiquement ajoutée sur google drive.</p>
      </section>
    </div>
  )
}

export default Area1;
