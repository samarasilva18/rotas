import '../MainStyle.css'
import React from 'react'
import capital from '../images/capital.jpg'
import { Link } from "react-router-dom";

export default function Capital() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={capital} alt="Noticias da Capital " className="capitaimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral"> Voltar </Link>
            </div>
        </div>
    )

}