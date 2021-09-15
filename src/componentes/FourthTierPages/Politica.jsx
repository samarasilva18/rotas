import '../MainStyle.css'
import React from 'react'
import politica from '../images/politica.jpg'
import { Link } from "react-router-dom";

export default function Politica() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={politica} alt="Politica" className="Politimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral/capital"> Voltar </Link>
            </div>
        </div>
    )

}