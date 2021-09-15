import '../MainStyle.css'
import React from 'react'
import culinaria2 from '../images/culinaria2.jpg'
import { Link } from "react-router-dom";

export default function Culinaria2() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={culinaria2} alt="Culinaria" className="culinaimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record/balancogeral/capital"> Voltar </Link>
            </div>
        </div>
    )

}