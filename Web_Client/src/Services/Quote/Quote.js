import React from "react"
import Header from "../../Components/Header"
import Areas from "../../Components/areas"
import User from "../../User"
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub, FaYoutube, FaQuoteRight, FaBusinessTime} from 'react-icons/fa';


function Quote() {
  const Activate = () => {

    User.QuoteLogin();
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
              <FaQuoteRight className="h-10 w-10" />
            </a>
            <p className="text-3xl lg:text-5xl my-2 font-semibold">Quote</p>
            <p className="text-xl lg:mx-36 mx-10"> <b>Quote</b>, des citations inspirantes.</p>
            

            <button className="border-4 w-2/5 lg:w-1/6 border-solid p-2 rounded-full my-5 self-center" onClick={Activate}>Activate</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-8 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5 p-2">
          <a href="/Quote-1">
            <Areas service="Quote" featuring="discord" description="Lorsqu'un nouveau message de type '!quote' est envoyé dans le serveur, il recoit une citation motivante." bgComponent={'bg-[#d3d3d3]'}/>
          </a>
          <a href="/Quote-2">
            <Areas service="Quote" featuring="time" description="Chaque matin a 9h, une citation motivatante est posté dans le serveur." bgComponent={'bg-[#d3d3d3]'}/>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Quote
