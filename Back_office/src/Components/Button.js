import React from 'react';

const Button = ({ bg, text, color, width, height, onClick }) => {
    return (
        <button className='rounded-lg'
            style={{ backgroundColor:bg, color: color, width: width, height: height }} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
