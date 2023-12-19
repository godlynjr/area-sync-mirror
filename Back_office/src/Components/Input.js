import React from 'react';

const Input = ({ text, style, onSearch }) => {
    return (
        <input
            type="text"
            value={text}
            style={style}
            onChange={(event) => onSearch(event.target.value)}
        />
    );
};

export default Input;
