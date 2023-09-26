import React from "react";
import "./Login.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const Login = (props) => {

    const {signUp, handleLogin} = props;

    return (

        <>
            <h1>Welcome back!</h1>
            <Input label="Email" type="text" />
            <Input type="Password" />
            <Button text="Login" onClick={handleLogin} />
            <p>Don't have an account? Just <span className="signUp" onClick={signUp}>sign up</span></p>
            <p className="resetPassword" onClick={()=>alert("Something will happen")}>Forgot your password ?</p>
        </>

    )

}