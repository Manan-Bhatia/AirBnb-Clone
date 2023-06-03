import React from "react";
import heroImg from "../assets/photo-grid.png";

export default function Hero() {
    return (
        <div className="Hero">
            <img src={heroImg} alt="Hero Image" className="Hero-Image" />
            <h1>AirBnb Experience</h1>
            <p>
                Find the perfect place to stay at an amazing price in 191
                countries. Belong anywhere with AirBnb.
            </p>
        </div>
    );
}
