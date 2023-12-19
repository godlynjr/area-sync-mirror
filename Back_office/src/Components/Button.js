import React from 'react';

const Button = ({ text, color, width, height, onClick }) => {
    return (
        <button 
            style={{ color: color, width: width, height: height }} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
