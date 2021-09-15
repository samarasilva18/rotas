import '../MainStyle.css'
import React from 'react'
import afazenda from '../images/afazenda.webp'
import { Link } from "react-router-dom";

export default function AFazenda() {
    return (
        <div>
            <div className="imagem-container">
            <img src={afazenda} alt="Logo da Fazenda" className="fazimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}