import '../MainStyle.css'
import React from 'react'
import alerta from '../images/alerta.png'
import { Link } from "react-router-dom";

export default function CidadeAlerta() {
    return (
        <div>
            <div className="imagem-container">
            <img src={alerta} alt="Logo do Cidade Alerta" className="alertimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}