import React, {useState} from "react";
import "./App.scss";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { LoggedIn } from "../LoggedIn/LoggedIn";
import { BackOfficeLanding } from "../../Pages/BackOfficeLanding/BackOfficeLanding";

export const App = () => {

    const [login, setLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loadBackOffice, setLoadBackOffice] = useState(false);

    const handleBackOfficeLoad = () => {

        setLogin(prevState => !prevState);
        setIsLoggedIn(prevState => !prevState);
        setLoadBackOffice(prevState => !prevState);

    }

    return (

        <>
            {isLoggedIn && <LoggedIn handleBackOfficeLoad={handleBackOfficeLoad} /> }
            {loadBackOffice && <BackOfficeLanding />}
            { !loadBackOffice && <LoginSignUp    
                login={login} 
                handleClick={() => setLogin(prevState => !prevState)} 
                handleLogin={()=>{setIsLoggedIn(prevState=>!prevState); console.log("clicked")}}
            /> 
            }
        </>

    )

}