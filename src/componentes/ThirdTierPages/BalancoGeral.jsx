import '../MainStyle.css'
import React from 'react'
import balanco from '../images/balanco.webp'
import { Link } from "react-router-dom";

export default function BalancoGeral() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={balanco} alt="Logo do Balanço Geral " className="balancimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}