import React, {useState} from "react";
import { Link } from "react-router-dom";
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
            <Link to="/MenuManagement">
                <MenuButton text="Menu management"
                            img={menu}
                        />
            </Link>
            <Link to="/SaleItems">
                <MenuButton text="Sale items"
                            img={saleItems}
                            />
            </Link>
            <Link to="/Inventory">
                <MenuButton text="Inventory"
                            img={inventory}
                            />
            </Link>
            <Link to="/Users">
                <MenuButton text="Users"
                            img={users}
                            />
            </Link>
            <Link to="/StaffHours">
                <MenuButton text="Staff hours"
                            img={hours}
                            />
            </Link>
            <Link to="/Reports">
                <MenuButton text="Reports"
                            img={reports}
                        />
            </Link>
            <br></br>
            <br></br>
            <MenuButton text="Exit"
                        img={quit}
                        />
        </nav>

    )

}