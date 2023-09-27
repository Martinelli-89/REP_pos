import React, {useState} from "react";
import "./SideNav.scss";
import {MenuButton} from "../../Components/MenuButton/MenuButton.jsx";

export const SideNav = () => {

    return (

        <nav className="sideNav">
            <h2>Logo</h2>
            <br></br>
            <MenuButton text="Menu management"
                        onClick={() => alert("Go to section")}
            />
            <MenuButton text="Sale items"
                        onClick={() => alert("Go to section")}
            />
            <MenuButton text="Inventory"
                        onClick={() => alert("Go to section")}
            />
            <MenuButton text="Users"
                        onClick={() => alert("Go to section")}
            />
            <MenuButton text="Staff hours"
                        onClick={() => alert("Go to section")}
            />
            <MenuButton text="Reports"
                        onClick={() => alert("Go to section")}
            />
            <MenuButton text="Exit"
                        onClick={() => alert("Go to section")}
            />
        </nav>

    )

}