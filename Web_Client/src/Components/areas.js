import React from 'react';

const Areas = ({ service, featuring, description}) => {

    return (
        <div className='border border-solid text-center h-20 w-30'>
            <p>{service}</p>
            <p>{featuring}</p>
            <p>{description}</p>
        </div>
    );
};

export default Areas;
