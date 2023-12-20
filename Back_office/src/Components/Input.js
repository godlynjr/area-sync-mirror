import React from 'react';

const Input = ({ text, style, handleSearchChange }) => {
    return (
        <input
            type="text"
            value={text}
            className={style}
            onChange={handleSearchChange}
            placeholder='Search for...'
        />
    );
};

export default Input;
