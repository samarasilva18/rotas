import '../MainStyle.css'
import React from 'react'
import interior from '../images/interior.jpg'
import { Link } from "react-router-dom";

export default function Interior() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={interior} alt="Noticias do Interior" className="interimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral"> Voltar </Link>
            </div>
        </div>
    )

}