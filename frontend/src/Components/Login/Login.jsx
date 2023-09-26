import React from "react";
import "./Login.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";


export const Login = (props) => {

    const {signUp} = props;

    return (

        <>
            <h3>Welcome back!</h3>
            <Input label="Email" type="text" />
            <Input type="Password" />
            <Button text="Login" onClick={signUp} />
            <p>Don't have an account? Just <span className="signUp" onClick={signUp}>sign up</span></p>
            <p className="resetPassword" onClick={()=>alert("Something will happen")}>Forgot your password ?</p>
        </>

    )

}