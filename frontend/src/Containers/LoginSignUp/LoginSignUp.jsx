import React, {useState} from "react";
import "./LoginSignUp.scss";
import { Login } from "../../Components/Login/Login.jsx";

export const LoginSignUp = (props) => {

    const {login, handleClick} = props;

    return (

        <div className="welcomePage">
            <div className="leftPanel">
                <h1>Welcome component here</h1>
            </div>
            <div className="rightPanel">
                { login && <Login signUp={handleClick}/> }
                { !login && <h2>Signup</h2>}
            </div>
        </div>

    )

}