import React from 'react';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub, FaYoutube, FaQuoteRight, FaBusinessTime} from 'react-icons/fa';

const ServiceComponent = ({ service, onServiceClick }) => {

    const handleClick = () => {
        // Call the onServiceClick callback with the service name
        onServiceClick(service.name);
    };
    
    let iconComponent;
    let bgColorClass;

    switch (service.name.toLowerCase()) {
      
      case 'discord':
        iconComponent = <FaDiscord className='h-10 w-10'/>;
        bgColorClass = 'bg-discord';
        break;
      case 'quote':
        iconComponent = <FaQuoteRight className='h-10 w-10'/>;
        bgColorClass = 'bg-[#d3d3d3]';
        break;
      case 'google calendar':
        iconComponent = <FaCalendar className='h-9 w-10' />;
        bgColorClass = 'bg-[#4285f4]';
        break;
      case 'youtube':
        iconComponent = <FaYoutube className='h-10 w-10' />;
        bgColorClass = 'bg-[#ff0000]'
        break;
      case 'spotify':
        iconComponent = <FaSpotify className='h-10 w-10' />;
        bgColorClass = 'bg-[#1DB954]'
        break;
      case 'gmail':
        iconComponent = <FaEnvelope className='h-10 w-10' />;
        bgColorClass = 'bg-[#d3d3d3]'
        break;
      case 'date & time':
        iconComponent = <FaBusinessTime className='h-10 w-10' />;
        bgColorClass = 'bg-[#773b96]'
        break;
      case 'github':
        iconComponent = <FaGithub className='h-10 w-10' />;
        bgColorClass = 'bg-[#302b5c]'
        break;
      default:
        iconComponent = null;
        break;
    }

    return (
        <div className={`border border-solid text-center h-36 w-3/4 rounded-lg ${bgColorClass}`} onClick={handleClick}>
          <div className='flex justify-center items-center my-5'>
            {iconComponent}
          </div>
          <p className='text-xl'>{service.name}</p>
        </div>
    );
};

export default ServiceComponent;
