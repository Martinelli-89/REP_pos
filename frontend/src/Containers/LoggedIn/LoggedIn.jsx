import React from "react";  
import "./LoggedIn.scss";
import {Button} from "../../Components/Button/Button.jsx";

export const LoggedIn = () => {

    return (

        <div className="modal">
            <div className="modalContent">
                <h3>Business name</h3>
                <Button text="Back office" onClick={()=>alert("load back office")}/>
                <Button text="Point of sale" onClick={()=>alert("load point of sale")}/>
            </div>
        </div>

    )

}