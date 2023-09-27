import react, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {SideNav} from "../../Containers/SideNav/SideNav.jsx";
import "./BackOfficeLanding.scss";

export const BackOfficeLanding = () => {

    return (

        <Routes>
            <Route 
                path="*" 
                element={
                    <>
                        <SideNav />
                        <div className="dataHere"><h2>Load data here</h2></div>
                    </>
                } />
        </Routes>

    )

}