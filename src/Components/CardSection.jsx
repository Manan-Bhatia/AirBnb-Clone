import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { createApi } from "unsplash-js";

function CardSection() {
    const api = createApi({
        accessKey: "7VK6JaPHe4o8g9iypaumRPWzS0SvV1d4Ey4M5epM2_o",
    });

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        api.search
        .getPhotos(
            {
                query: "house interior", 
                orientation: "squarish",
                per_page: 12
            })
        .then(res => setCardData(res.response.results))
            
        .catch(() => {
            console.log("Something went wrong!")
        })
    },[]);

    console.log(cardData)

    const propsToSend = cardData.map(data => {
        return ({
            id: data.id,
            url: data.urls.small,
            firstName: data.user.first_name
        })
    })


    return (
        <div className="card-grid">
            {propsToSend.map(item => {
                return <Card key = {item.id} props = {item} />
            })}
        </div>
    );
}

export default CardSection;
