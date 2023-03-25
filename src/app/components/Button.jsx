import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button className="button button__primary" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
