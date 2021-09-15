import '../MainStyle.css'
import React from 'react'
import culinaria from '../images/culinaria.jpg'
import { Link } from "react-router-dom";

export default function Culinaria() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={culinaria} alt="Noticias de Culinaria" className="culimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral"> Voltar </Link>
            </div>
        </div>
    )

}