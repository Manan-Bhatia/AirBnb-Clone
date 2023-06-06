import React from 'react'
import airBnbLogo from '../assets/airbnb-logo.png'

export default function Nav()
{
    return(
        <header>
            <div className="image">
            <img src={airBnbLogo} alt="Logo" className = "Header-Image"/>
            </div>
        </header>
    )
}