import React from 'react';

const Modal = ({ Email, onLogOut }) => {
    return (
        <div>
            <p>Email: {Email}</p>
            <button onClick={onLogOut}>Log Out</button>
        </div>
    );
};

export default Modal;
