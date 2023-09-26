import React from "react";
import './Button.scss';

export const Button = (props) => {

    const { text, onClick } = props;

    return (

        <div className="button" onClick={onClick}>
            {text}
        </div>

    )

}