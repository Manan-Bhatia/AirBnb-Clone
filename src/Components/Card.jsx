import React from "react";
import dummyImage from "../assets/dummy-image.png";
import starImage from "../assets/star.png";

export default function Card({ dataRecieved }) {
    return (
        <div className="card">
            <img src={dataRecieved.url} alt="Image" className="card-image" />
            <div className="card-stats">
                <img src={starImage} alt="Star" className="card-star" />
                <span>{dataRecieved.rating}</span>
                <span className="grey">({dataRecieved.noOfRatings})</span>
            </div>
            <span>
                <b>
                    {dataRecieved.location_city},{" "}
                    {dataRecieved.location_country}
                </b>
            </span>
            <br />
            <span>{dataRecieved.distance} Kilometers away</span>
            <p title="Unsplash User">
                Seller : <a href={dataRecieved.profileLink} target="_blank">{dataRecieved.firstName}</a>
            </p>
            <p>
                <b>
                    <span className="sans-serif">₹</span>
                    {dataRecieved.price}
                </b>{" "}
                night
            </p>
        </div>
    );
}
