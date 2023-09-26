import React from "react";
import "./Input.scss";

export const Input = (props) => {

    const { label, type } = props;

    return (

        <div className="inputWrapper">
            <label for={type} className="inputLabel">{label? label : type}</label>
            <input type={type} name={type} className="input"></input>
        </div>

    )

}