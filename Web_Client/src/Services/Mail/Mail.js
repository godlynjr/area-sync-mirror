import React from "react"
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";

function Mail() {
  const ConnectMail = () => {
    console.log("Connect to Mail");
    // User.DiscordLogin();
  }

  return (
    <div>
      <section className="bg-[#d3d3d3] text-black">
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
              <a href="https://discord.com" className="text-lg font-semibold">Visit Discord</a>
            </div>
          </div>

          {/* logo and description */}
          <div className="flex flex-col text-center">
            <a href="https://www.google.com/intl/fr/gmail/about/" className="flex justify-center items-center" >
              <svg fill="#000000" className='h-16' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"/>
              </svg>
            </a>
            <p className="text-3xl lg:text-5xl my-2 font-semibold">Mail integrations</p>
            <p className="text-xl lg:mx-36 mx-10"> <b>Gmail</b> une messagerie sécurisée, intelligente et facile à utiliser.</p>
            

            <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center" onClick={ConnectMail}>Connect</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-8 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5 p-2">
          <a href="/Mail-1">
            <Areas service="mail" featuring="calendar" description="Chaque fois qu'un message est épinglé dans le serveur, un évenement est créer dans google calendar." bgComponent={'bg-[#d3d3d3]'}/>
          </a>
          <a href="/Mail-2">
            <Areas service="mail" featuring="spotify" description="Lorsque vous commencez à écouter une playlist spécifique sur Spotify, un message est posté dans un canal Discord pour partager la playlist avec les autres." bgComponent={'bg-[#d3d3d3]'}/>
          </a>
          <a href="/Mail-3">
            <Areas service="mail" featuring="notion" description="Lorsqu'une nouvelle tâche est ajoutée à une liste de tâches dans Notion, un message est posté dans un canal Discord pour informer les autres de la nouvelle tâche." bgComponent={'bg-[#d3d3d3]'}/>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Mail
