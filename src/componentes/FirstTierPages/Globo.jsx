import '../MainStyle.css'
import React from 'react'
import globo from '../images/globo.png'
import { Link } from "react-router-dom";

export default function Globo() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={globo} alt="Logo da TV Globo" className="globoimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}