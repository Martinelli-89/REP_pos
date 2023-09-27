import React from "react";
import './MenuButton.scss';

export const MenuButton = (props) => {

    const { text, img } = props;

    return (

        <div className="menuButton" >
            <img src={img} alt="button icon" className="menuButtonImg"/>
            <p>{text}</p>
        </div>

    )

}