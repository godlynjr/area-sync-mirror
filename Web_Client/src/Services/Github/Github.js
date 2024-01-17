import React from 'react'
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router-dom';

function Github() {
  const location = useLocation();

  const ConnectSpotify = () => {
    const currentPath = location.pathname;
    User.SpotifyLogin(currentPath);
  }
  return (
    <div>
      <section className="bg-[#302b5c] text-white">
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
              <a href="https://github.com" className="text-lg font-semibold">Visit Github</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <a href="/Github" className="flex justify-center items-center" >
              <svg className='h-12' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                              </g>
                          </g>
                      </g>
                </svg>
            </a>
            <p className="text-3xl lg:text-5xl my-2 font-bold">Github integrations</p>
            <p className="text-xl lg:mx-36 mx-10"> <b>Github</b> is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.</p>
            

            <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center" onClick={ConnectSpotify}>Connect</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-8 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5 p-2">
          <a href="/Github-1">
            <Areas service="github" featuring="calendar" description="Chaque fois qu'un message est épinglé dans le serveur, un évenement est créer dans google calendar." bgComponent={'bg-[#302b5c]'}/>
          </a> 
          <a href="/Github-2">
            <Areas service="github" featuring="spotify" description="Lorsque vous commencez à écouter une playlist spécifique sur Spotify, un message est posté dans un canal Discord pour partager la playlist avec les autres." bgComponent={'bg-[#302b5c]'}/>
          </a>
          <a href="/Github-3">
            <Areas service="github" featuring="notion" description="Lorsqu'une nouvelle tâche est ajoutée à une liste de tâches dans Notion, un message est posté dans un canal Discord pour informer les autres de la nouvelle tâche." bgComponent={'bg-[#302b5c]'}/>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Github