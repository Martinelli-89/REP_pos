import React, {useState} from "react";
import "./App.scss";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";

export const App = () => {

    const [login, setLogin] = useState(true);

    return (

        <>
            <LoginSignUp login={login} handleClick={() => setLogin(prevState => !prevState)} />
        </>

    )

}