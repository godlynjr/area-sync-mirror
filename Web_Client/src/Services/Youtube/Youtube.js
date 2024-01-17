import React from 'react'
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router-dom';
import { FaDiscord, FaCalendar, FaYoutube, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';

function Youtube() {
  const location = useLocation();

  const ConnectYoutube = () => {
    const currentPath = location.pathname;
    User.YoutubeLogin(currentPath);
  }
  return (
    <div>
      <section className="bg-[#ff0000] text-white">
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
              <a href="/home" className="text-lg font-bold">Back</a>
            </div>
            <div className="border-4 border-solid p-2 rounded-full">
              <a href="https://youtube.com" className="text-lg font-semibold">Visit Youtube</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <a href="/Discord" className="flex justify-center items-center" >
              <FaYoutube className='h-24 w-24'/>
            </a>
            <p className="text-3xl lg:text-5xl my-2 font-bold">Youtube integrations</p>
            <p className="text-xl lg:mx-36 mx-10"> <b>Youtube</b> est un site web de partage de vidéos sur lequel les utilisateurs peuvent télécharger, partager et visionner des vidéos. Utilisez des areas pour gérer vos vidéos préférées, être informé des nouveaux téléchargements à partir de vos abonnements</p>
            

            <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center" onClick={ConnectYoutube}>Connect</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-8 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5 p-2">
          <a href="/Youtube-1">
            <Areas service="youtube" featuring="drive" description="Apres un like sur une vidéo ses infos sont automatiquement ajoutée sur google drive." bgComponent={'bg-[#ff0000]'}/>
          </a> 
          <a href="/Youtube-2">
            <Areas service="youtube" featuring="mail" description="Envoyer une notification sur Gmail lorsqu'une nouvelle vidéo est mise en ligne par un channel spécifié." bgComponent={'bg-[#ff0000]'}/>
          </a>
          {/* <a href="/Spotify-3">
            <Areas service="spotify" featuring="notion" description="Lorsqu'une nouvelle tâche est ajoutée à une liste de tâches dans Notion, un message est posté dans un canal Discord pour informer les autres de la nouvelle tâche." bgComponent={'bg-[#ff0000]'}/>
          </a> */}
        </div>
      </section>
    </div>
  )
}

export default Youtube