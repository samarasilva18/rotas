import '../MainStyle.css'
import React from 'react'
import sbt from '../images/sbt.png'
import { Link } from "react-router-dom";

export default function Sbt() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={sbt} alt="Logo da SBT" className="sbtimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}