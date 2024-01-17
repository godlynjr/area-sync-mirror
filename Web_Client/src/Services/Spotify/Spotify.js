import React from 'react'
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router-dom';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';

function Spotify() {
  const location = useLocation();

  const ConnectSpotify = () => {
    const currentPath = location.pathname;
    User.SpotifyLogin(currentPath);
  }
  return (
    <div>
      <section className="bg-[#1DB954] text-white">
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
              <a href="https://spotify.com" className="text-lg font-semibold">Visit Spotify</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <a href="/Discord" className="flex justify-center items-center" >
              <FaSpotify className='h-24 w-24'/>
            </a>
            <p className="text-3xl lg:text-5xl my-2 font-bold">Spotify integrations</p>
            <p className="text-xl lg:mx-36 mx-10"> <b>Spotify</b> est un service de musique numérique, de podcasts et de vidéos qui vous donne accès à des millions de chansons et d'autres contenus provenant de créateurs du monde entier. Les fonctions de base telles que l'écoute de musique sont totalement gratuites, mais vous pouvez également choisir de passer à Spotify Premium.</p>
            

            <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center" onClick={ConnectSpotify}>Connect</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-8 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5 p-2">
          <a href="/Spotify-1">
            <Areas service="spotify" featuring="calendar" description="Chaque fois qu'un message est épinglé dans le serveur, un évenement est créer dans google calendar." bgComponent={'bg-[#1DB954]'}/>
          </a> 
          <a href="/Spotify-2">
            <Areas service="spotify" featuring="spotify" description="Lorsque vous commencez à écouter une playlist spécifique sur Spotify, un message est posté dans un canal Discord pour partager la playlist avec les autres." bgComponent={'bg-[#1DB954]'}/>
          </a>
          <a href="/Spotify-3">
            <Areas service="spotify" featuring="notion" description="Lorsqu'une nouvelle tâche est ajoutée à une liste de tâches dans Notion, un message est posté dans un canal Discord pour informer les autres de la nouvelle tâche." bgComponent={'bg-[#1DB954]'}/>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Spotify