import React from "react";
import "./SignUp.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";


export const SignUp = (props) => {

    const {login} = props;

    return (

        <>
            <h1>Can't wait to have you with us!</h1>
            <Input label="Email" type="text" />
            <Input type="Password" />
            <Input label="Confirm password" type="Password" />
            <br></br>
            <Button text="Sign Up" onClick={()=>alert("sign up will happen")} />
            <p>Already have an account? Just click <span className="signUp" onClick={login}>here</span></p>
        </>

    )

}