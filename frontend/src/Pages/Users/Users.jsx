import React from "react";
import "./Users.scss";
import { UserCard } from "../../Components/UserCard/UserCard";

export const Users = () => {

    const newUser = true;

    return (

        <section className="users">
            <div className="usersTitle">
                <h1>Manage users</h1>
            </div>
            <section className="usersCards">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard newUser={newUser}/>
            </section>
        </section>

    )

}