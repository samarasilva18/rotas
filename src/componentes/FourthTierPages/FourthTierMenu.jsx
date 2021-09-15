import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function FourthMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>
                        <li> <Link to = "/record/balancogeral/capital/politica" className="record"> Política </Link> </li>
                        <li> <Link to = "/record/balancogeral/capital/educacao" className="cultura"> Educação </Link> </li>
                        <li> <Link to = "/record/balancogeral/capital/policia" className="band"> Polícia </Link> </li>
                        <li> <Link to = "/record/balancogeral/capital/culinaria2" className="globo"> Culinária </Link> </li>
                        <li> <Link to = "/record/balancogeral/capital/esportes" className="sbt"> Esportes  </Link> </li>
                        
                    </ul>
                </nav>
            </header>
    )
}