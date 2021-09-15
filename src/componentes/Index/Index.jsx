import '../MainStyle.css'
import React from 'react'
import tvindex from '../images/tvindex.jpg'

export default function Index() {
    return (
        <div className="body">
            <div className="indeximage">
            <img src={tvindex} alt="Fundo de Televisao"></img>
            </div>
        </div>
    )

}