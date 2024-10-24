import React from "react";
import "./PrimaryButton.scss";

const PrimaryButton = ({ text, onClick}) => {
    return (
        <button className="primary-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default PrimaryButton;