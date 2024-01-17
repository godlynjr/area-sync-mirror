import React from 'react';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub, FaYoutube, FaGoogleDrive, FaQuoteRight } from 'react-icons/fa';
import { SiNotion } from "react-icons/si";
import { IoIosTimer } from "react-icons/io";

const Areas = ({ service, featuring, description, bgComponent}) => {

    let ServiceIcon;
    let iconComponent;

    switch(service.toLowerCase()) {
      case 'mail':
        ServiceIcon = <FaEnvelope className='h-5 w-5' />;
        break;
      case 'discord':
        ServiceIcon = <FaDiscord className='h-5 w-5'/>;
        break;
      case 'calendar':
        ServiceIcon = <FaCalendar className='text-white h-5 w-5' />;
        break;
      case 'notion':
        ServiceIcon = <SiNotion className='text-white h-5 w-5' />;
        break;
      case 'spotify':
        ServiceIcon = <FaSpotify className='text-white h-5 w-5' />;
        break;
      case 'youtube':
        ServiceIcon = <FaYoutube className='text-white h-5 w-5' />;
        break;
      case 'quote':
        ServiceIcon = <FaQuoteRight className='text-white h-5 w-5' />;
        break;
      default:
        ServiceIcon = null;
        break;
    }

    switch (featuring.toLowerCase()) {
      case 'mail':
        iconComponent = <FaEnvelope className='h-5 w-5' />;
        break;
      case 'discord':
        iconComponent = <FaDiscord className='h-5 w-5'/>;
        break;
      case 'calendar':
        iconComponent = <FaCalendar className='text-white h-5 w-5' />;
        break;
      case 'notion':
        iconComponent = <SiNotion className='text-white h-5 w-5' />;
        break;
      case 'spotify':
        iconComponent = <FaSpotify className='text-white h-5 w-5' />;
        break;
      case 'drive':
        iconComponent = <FaGoogleDrive className='text-white h-5 w-5' />;
        break;
      default:
        iconComponent = null;
        break;
    }

    return (
        <div className={`flex flex-col w-30 border border-solid h-72 lg:w-3/4 w-full rounded-lg p-2 ${bgComponent} text-white`}>
            <div className="flex flex-row space-x-2">
                {ServiceIcon}
                {iconComponent}
            </div>
            <p className='text-xl lg:text-2xl font-bold'>{description}</p>
        </div>
    );
};

export default Areas;
