import '../MainStyle.css'
import React from 'react'
import raulgil from '../images/raulgil.png'
import { Link } from "react-router-dom";

export default function RaulGil() {
    return (
        <div>
            <div className="imagem-container">
            <img src={raulgil} alt="Logo do Raul Gil" className="raulimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}