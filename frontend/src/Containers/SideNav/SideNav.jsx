import React, {useState} from "react";
import "./SideNav.scss";
import {MenuButton} from "../../Components/MenuButton/MenuButton.jsx";
import menu from "../../Assets/Img/menu.svg";
import inventory from "../../Assets/Img/inventory.svg";
import saleItems from "../../Assets/Img/saleItem.svg";
import users from "../../Assets/Img/Users.svg";
import hours from "../../Assets/Img/hours.svg";
import reports from "../../Assets/Img/report.svg";
import quit from "../../Assets/Img/quit.svg";

export const SideNav = () => {

    return (

        <nav className="sideNav">
            <h2 className="logo">Logo</h2>
            <MenuButton text="Menu management"
                        onClick={() => alert("Go to section")}
                        img={menu}
                        />
            <MenuButton text="Sale items"
                        onClick={() => alert("Go to section")}
                        img={saleItems}
                        />
            <MenuButton text="Inventory"
                        onClick={() => alert("Go to section")}
                        img={inventory}
                        />
            <MenuButton text="Users"
                        onClick={() => alert("Go to section")}
                        img={users}
                        />
            <MenuButton text="Staff hours"
                        onClick={() => alert("Go to section")}
                        img={hours}
                        />
            <MenuButton text="Reports"
                        onClick={() => alert("Go to section")}
                        img={reports}
                        />
            <br></br>
            <br></br>
            <MenuButton text="Exit"
                        onClick={() => alert("Go to section")}
                        img={quit}
                        />
        </nav>

    )

}