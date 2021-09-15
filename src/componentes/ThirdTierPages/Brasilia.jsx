import '../MainStyle.css'
import React from 'react'
import brasilia from '../images/brasilia.jpg'
import { Link } from "react-router-dom";

export default function Brasilia() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={brasilia} alt="Noticias de Brasilia" className="brasilimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral"> Voltar </Link>
            </div>
        </div>
    )

}