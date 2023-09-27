import react, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {SideNav} from "../../Containers/SideNav/SideNav.jsx";
import {MenuManagement} from "../MenuManagement/MenuManagement.jsx";
import {SaleItems} from "../SaleItems/SaleItems.jsx";
import {Inventory} from "../Inventory/Inventory.jsx";
import {Users} from "../Users/Users.jsx";
import { StaffHours } from "../StaffHours/StaffHours.jsx";
import {Reports} from "../Reports/Reports.jsx";
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
            <Route 
                path="/MenuManagement" 
                element={
                    <>
                        <SideNav />
                        <MenuManagement />
                    </>
                } />
            <Route 
                path="/SaleItems" 
                element={
                    <>
                        <SideNav />
                        <SaleItems />
                    </>
                } />
            <Route 
                path="Inventory" 
                element={
                    <>
                        <SideNav />
                        <Inventory />
                    </>
                } />
            <Route 
                path="/Users" 
                element={
                    <>
                        <SideNav />
                        <Users />
                    </>
                } />
            <Route 
                path="/StaffHours" 
                element={
                    <>
                        <SideNav />
                        <StaffHours />
                    </>
                } />
            <Route 
                path="/Reports" 
                element={
                    <>
                        <SideNav />
                        <Reports />
                    </>
                } />
        </Routes>

    )

}