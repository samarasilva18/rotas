import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function ThirdMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/" className="record"> Inicio </Link> </li>
                        <li> <Link to = "/record/balancogeral/capital" className="cultura"> Notícias da Capital </Link> </li>
                        <li> <Link to = "/record/balancogeral/interior" className="band"> Notícias do Interior </Link> </li>
                        <li> <Link to = "/record/balancogeral/brasilia" className="globo"> Notícias de Brasília </Link> </li>
                        <li> <Link to = "/record/balancogeral/culinaria" className="sbt"> Notícias de Culinária </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}