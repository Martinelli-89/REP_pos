import React from "react";  
import "./LoggedIn.scss";
import {Button} from "../../Components/Button/Button.jsx";

export const LoggedIn = (props) => {

    const {handleBackOfficeLoad} = props;

    return (

        <div className="modal">
            <div className="modalContent">
                <h3>Business name</h3>
                <Button text="Back office" onClick={handleBackOfficeLoad}/>
                <Button text="Point of sale" onClick={()=>alert("load point of sale")}/>
            </div>
        </div>

    )

}