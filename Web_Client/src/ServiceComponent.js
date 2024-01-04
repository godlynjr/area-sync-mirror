import React from 'react';

const ServiceComponent = ({ service, onServiceClick }) => {

    const handleClick = () => {
        // Call the onServiceClick callback with the service name
        onServiceClick(service.name);
      };

    return (
        <div className='border border-solid text-center h-20 w-30 ' onClick={handleClick}>
        {/* Affichez les détails du service ici */}
        <p>{service.name}</p>
        {/* Autres détails du service */}
        </div>
    );
};

export default ServiceComponent;
