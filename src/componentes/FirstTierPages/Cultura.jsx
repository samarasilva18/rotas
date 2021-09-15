import '../MainStyle.css'
import React from 'react'
import cultura from '../images/cultura.png'
import { Link } from "react-router-dom";

export default function Cultura() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={cultura} alt="Logo da TV Cultura" className="culturaimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}