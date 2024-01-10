import React from 'react';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

const ServiceComponent = ({ service, onServiceClick }) => {

    const handleClick = () => {
        // Call the onServiceClick callback with the service name
        onServiceClick(service.name);
    };
    
    let iconComponent;
    let bgColorClass;

    switch (service.name.toLowerCase()) {
      case 'discord':
        iconComponent = <FaDiscord/>;
        bgColorClass = 'bg-discord';
        break;
      case 'google calendar':
        iconComponent = <FaCalendar />;
        bgColorClass = 'bg-[#4285f4]';
        break;
      case 'notion':
        iconComponent = <SiNotion />;
        bgColorClass = 'bg-[#FAF3DD]'
        break;
      case 'spotify':
        iconComponent = <FaSpotify />;
        bgColorClass = 'bg-[#1DB954]'
        break;
      case 'gmail':
        iconComponent = <FaEnvelope />;
        bgColorClass = 'bg-[#d3d3d3]'
        break;
      case 'tally':
        iconComponent = <FaChartBar />;
        bgColorClass = 'bg-[#773b96]'
        break;
      case 'github':
        iconComponent = <FaGithub />;
        bgColorClass = 'bg-[#333333]'
        break;
      default:
        iconComponent = null;
        break;
    }

    return (
        <div className={`border border-solid text-center h-36 w-30 rounded-lg ${bgColorClass}`} onClick={handleClick}>
          <div className='flex justify-center items-center my-5'>
            {iconComponent}
          </div>
          <p>{service.name}</p>
        </div>
    );
};

export default ServiceComponent;
