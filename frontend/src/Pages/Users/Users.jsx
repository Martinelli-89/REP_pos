import React from "react";
import "./Users.scss";
import { UserCard } from "../../Components/UserCard/UserCard";

export const Users = () => {

    const newUser = true;

    return (

        <section className="users">
            <div className="usersTitle">
                <h3>Manager users</h3>
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