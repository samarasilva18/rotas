import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function SecondMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>
                        <li> <Link to = "/record/falabrasil" className="record"> Fala Brasil </Link> </li>
                        <li> <Link to = "/record/balancogeral" className="cultura"> Balanço Geral </Link> </li>
                        <li> <Link to = "/record/cidadealerta" className="band"> Cidade Alerta </Link> </li>
                        <li> <Link to = "/record/afazenda" className="globo"> A Fazenda </Link> </li>
                        <li> <Link to = "/record/raulgil" className="sbt"> Raul Gil </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}