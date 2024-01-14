import React from 'react';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

const Areas = ({ service, featuring, description}) => {

    let iconComponent;

    switch (featuring.toLowerCase()) {
      case 'calendar':
        iconComponent = <FaCalendar className='h-5 w-5' />;
        break;
      case 'notion':
        iconComponent = <SiNotion className='h-5 w-5' />;
        break;
      case 'spotify':
        iconComponent = <FaSpotify className='h-5 w-5' />;
        break;
      default:
        iconComponent = null;
        break;
    }

    return (
        <div className='flex flex-col w-30 border border-solid h-72 w-3/4 rounded-lg p-2 bg-discord text-white'>
            <div className="flex flex-row space-x-2">
                <FaDiscord className='text-white h-5 w-5'/>
                {iconComponent}
            </div>
            <p className='text-2xl font-bold'>{description}</p>
        </div>
    );
};

export default Areas;
