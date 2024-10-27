import React from "react";
import "./PrimaryButton.scss";

const PrimaryButton = ({ text, onClick, fontSize}) => {
    return (
        <button 
            className="primary-button" 
            onClick={onClick}
            style={{
                '--button-font-size': fontSize || '16px',
            }}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;