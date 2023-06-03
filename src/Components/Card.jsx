import React from "react";
import dummyImage from "../assets/dummy-image.png";
import starImage from "../assets/star.png";

export default function Card({props}) {
    return (
        <div className="card">
            <img src={props.url} alt="Image" className="card-image" />
            <div className="card-stats">
                <img src={starImage} alt="Star" className="card-star" />
                <span>5.0</span>
                <span className = "grey">(6) • </span>
                <span className = "grey">USA</span>
            </div>
            <p>Seller : {props.firstName}</p>
            <p><b>From $130</b> / Person</p>
        </div>
    );
}
