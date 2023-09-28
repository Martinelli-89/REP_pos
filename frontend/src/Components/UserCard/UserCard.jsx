import React from "react";
import "./UserCard.scss";
import male from "../../Assets/Img/male.svg";
import female from "../../Assets/Img/female.svg";
import update from "../../Assets/Img/update.svg";
import bin from "../../Assets/Img/delete.svg";
import addUser from "../../Assets/Img/addUser.svg";

export const UserCard = (props) => {

    const newUser = (props.newUser == undefined )? false : true;

    return (

        <section className="userCard">
            <img src={!newUser? female : addUser} alt="user icon" className="userIcon"/>
            <h5 className="name">{newUser? "Add user" : "Alex Martinelli"}</h5>
            <h6 className="title">{newUser? "" : "Developer"}</h6>
            {!newUser && <img className="update" src={update}></img>}
            {!newUser && <img className="delete" src={bin}></img>}
        </section>

    )

}