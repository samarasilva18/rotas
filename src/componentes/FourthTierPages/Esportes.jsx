import '../MainStyle.css'
import React from 'react'
import esportes from '../images/esportes.jpg'
import { Link } from "react-router-dom";

export default function Esportes() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={esportes} alt="Esportes" className="esportimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral/capital"> Voltar </Link>
            </div>
        </div>
    )

}