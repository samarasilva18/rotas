import '../MainStyle.css'
import React from 'react'
import falabrasil from '../images/falabrasil.jpg'
import { Link } from "react-router-dom";

export default function FalaBrasil() {
    return (
        <div>
            <div className="imagem-container">
            <img src={falabrasil} alt="Logo da Fala Brasil" className="falaimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}