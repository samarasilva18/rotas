import '../MainStyle.css'
import React from 'react'
import educacao from '../images/educacao.png'
import { Link } from "react-router-dom";

export default function Educacao() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={educacao} alt="Educacao" className="eduimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral/capital"> Voltar </Link>
            </div>
        </div>
    )

}