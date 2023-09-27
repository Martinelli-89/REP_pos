import React from "react";
import "./UserCard.scss";
import male from "../../Assets/Img/male.svg";
import female from "../../Assets/Img/female.svg";
import update from "../../Assets/Img/update.svg";
import bin from "../../Assets/Img/delete.svg";

export const UserCard = (props) => {

    return (

        <section className="userCard">
            <img src={female} alt="user icon" className="userIcon"/>
            <h5 className="name">Alex Martinelli</h5>
            <h6 className="title">Developer</h6>
            <img className="update" src={update}></img>
            <img className="delete" src={bin}></img>
        </section>

    )

}