import React, {useState} from "react";
import "./LoginSignUp.scss";
import { Login } from "../../Components/Login/Login.jsx";
import { SignUp } from "../../Components/SignUp/SignUp";

export const LoginSignUp = (props) => {

    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    const {login, handleClick, handleLogin} = props;

    return (

        <div className="welcomePage">
            <div className="leftPanel">
                <h1>Welcome component here</h1>
            </div>
            <div className="rightPanel">
                { login && <Login   signUp={handleClick} 
                                    handleLogin={handleLogin} 
                            /> }
                { !login && <SignUp login={handleClick}/>}
            </div>
        </div>

    )

}