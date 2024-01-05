import React from 'react';
import { FaDiscord, FaCalendar, FaSpotify, FaEnvelope, FaChartBar, FaGithub } from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

const ServiceComponent = ({ service, onServiceClick }) => {

    const handleClick = () => {
        // Call the onServiceClick callback with the service name
        onServiceClick(service.name);
    };
    
    let iconComponent;

    switch (service.name.toLowerCase()) {
        case 'discord':
          iconComponent = <FaDiscord/>;
          break;
        case 'google calendar':
          iconComponent = <FaCalendar />;
          break;
        case 'notion':
          iconComponent = <SiNotion />;
          break;
        case 'spotify':
          iconComponent = <FaSpotify />;
          break;
        case 'gmail':
          iconComponent = <FaEnvelope />;
          break;
        case 'tally':
          iconComponent = <FaChartBar />;
          break;
        case 'github':
          iconComponent = <FaGithub />;
          break;
        default:
          iconComponent = null;
          break;
    }

    return (
        <div className='border border-solid text-center h-20 w-30 ' onClick={handleClick}>
        {iconComponent}
        <p>{service.name}</p>
        {/* Autres détails du service */}
        </div>
    );
};

export default ServiceComponent;
