import React from "react"
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router-dom';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';

function Calendar() {
  const location = useLocation();

  const ConnectCalendar = () => {

    const currentPath = location.pathname;
    User.GCalendarLogin(currentPath);
  }

  return (
    <div>
      <section className="bg-[#4285f4] text-black">
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
        
                  className="h-5 w-5 text-black mt-1"
                />
              <a href="/home" className="text-lg font-semibold">Back</a>
            </div>
            <div className="border-4 border-solid p-2 rounded-full">
              <a href="https://calendar.google.com" className="text-lg font-semibold">Visit Google Calendar</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <a href="https://www.google.com/intl/fr/gmail/about/" className="flex justify-center items-center" >
              <FaCalendar className="h-12 w-12" />
            </a>
            <p className="text-3xl lg:text-5xl my-2 font-semibold">Calendar integrations</p>
            <p className="text-xl lg:mx-36 mx-10"> Un calendrier en ligne partageable.
      Passez plus de temps à agir et moins à planifier grâce à un agenda partageable compatible avec tous les outils Google Workspace.</p>
            

            <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center" onClick={ConnectCalendar}>Connect</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-8 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5 p-2">
          <a href="/Calendar-1">
            <Areas service="notion" featuring="calendar" description="Créer une nouvelle page dans Notion avec les détails de l'événement lorsqu'un nouvel événement est ajouté à votre calendrier" bgComponent={'bg-[#4285f4]'}/>
          </a>
          <a href="/Calendar-2">
            <Areas service="twitter" featuring="calendar" description="Lorsque vous commencez à écouter une playlist spécifique sur Spotify, un message est posté dans un canal Discord pour partager la playlist avec les autres." bgComponent={'bg-[#4285f4]'}/>
          </a>
          {/* <a href="/Calendar-3">
            <Areas service="mail" featuring="notion" description="Lorsqu'une nouvelle tâche est ajoutée à une liste de tâches dans Notion, un message est posté dans un canal Discord pour informer les autres de la nouvelle tâche." bgComponent={'bg-[#4285f4]'}/>
          </a> */}
        </div>
      </section>
    </div>
  )
}

export default Calendar
