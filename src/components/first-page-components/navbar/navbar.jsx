import React from 'react';
import "./navbar.css"
import logo from "../../../assets/png/coinrabitcharD22aR00a_1.png"

const MyComponent = () => {
    return (
        <div className={"navbar"}>
            <div className={"logoNav"}>
                <img className={"logoNavImg"} src={logo} alt={"logo"}/>
                <h1 className={"logoNavText"}>Rabbit Inu</h1>
            </div>
            <div className="navbarLinks">
                <ul className={"ulNavBar"}>
                    <li>Home</li>
                    <li>CarrotMap</li>
                    <li>Rabbitners </li>
                    <li>Rabbitons</li>
                    <li>Guide</li>
                </ul>
            </div>
        </div>
    );
};

export default MyComponent;
