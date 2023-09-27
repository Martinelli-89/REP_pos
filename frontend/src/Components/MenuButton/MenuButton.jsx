import React from "react";
import './MenuButton.scss';

export const MenuButton = (props) => {

    const { text, onClick,img } = props;

    return (

        <div className="menuButton" onClick={onClick}>
            <img src={img} alt="button icon" className="menuButtonImg"/>
            {text}
        </div>

    )

}