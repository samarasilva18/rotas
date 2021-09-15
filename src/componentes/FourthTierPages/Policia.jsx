import '../MainStyle.css'
import React from 'react'
import policia from '../images/policia.jpeg'
import { Link } from "react-router-dom";

export default function Policia() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={policia} alt="Policia" className="policimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral/capital"> Voltar </Link>
            </div>
        </div>
    )

}