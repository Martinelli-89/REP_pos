import React, {useState} from "react";
import "./App.scss";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { LoggedIn } from "../LoggedIn/LoggedIn";

export const App = () => {

    const [login, setLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <>
            {isLoggedIn && <LoggedIn /> }
            <LoginSignUp    
                login={login} 
                handleClick={() => setLogin(prevState => !prevState)} 
                handleLogin={()=>{setIsLoggedIn(prevState=>!prevState); console.log("clicked")}}
            />
        </>

    )

}