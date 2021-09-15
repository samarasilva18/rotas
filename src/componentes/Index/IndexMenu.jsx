import React from "react";
import { Link } from "react-router-dom";

import './IndexMenu.css'

export default function IndexMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/record" className="record"> Record </Link> </li>
                        <li> <Link to = "/cultura" className="cultura"> Cultura </Link> </li>
                        <li> <Link to = "/band" className="band"> Band </Link> </li>
                        <li> <Link to = "/globo" className="globo"> Globo </Link> </li>
                        <li> <Link to = "/sbt" className="sbt"> Sbt </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}