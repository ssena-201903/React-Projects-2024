import React from "react";
import "./Buttons/PrimaryButton.scss";

const PrimaryButton = ({ text, onclick}) => {
    return (
        <button className="primary-button" onclick={onclick}>
            {text}
        </button>
    );
};

export default PrimaryButton;