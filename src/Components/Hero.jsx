import React from "react";
import heroImg from "../assets/photo-grid.png";

export default function Hero() {
    return (
        <div className="Hero">
            <img src={heroImg} alt="Hero Image" className= "Hero-Image"/>
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
}
