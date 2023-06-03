import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { createApi } from "unsplash-js";

function CardSection() {
    const api = createApi({         //Unslash API
        accessKey: "7VK6JaPHe4o8g9iypaumRPWzS0SvV1d4Ey4M5epM2_o",
    });

    const [cardData, setCardData] = useState([])    //data for the card (image and name)
    
    useEffect(() => {       // api for images and userName
        api.search
        .getPhotos(
            {
                query: "living room design", 
                orientation: "squarish",
                per_page: 12
            })
        .then(res => setCardData(res.response.results))
            
        .catch(() => {
            console.log("Something went wrong!")
        })
    },[]);

    const [userData, setUserData] = useState([])    //data for the card (location, price, and distance)

    useEffect(() => {       // api for location, price, and distance
        fetch("https://api-generator.retool.com/oS3Dda/user_data")
        .then(res => res.json())
        .then(data => setUserData(data.slice(0,12)))    // storing only 12 data values
    },[])



    //final compiled data to be sent
    const cardDataToSend = cardData.map(data => {         // storing images and name
        return ({
            id: data.id,
            url: data.urls.small,
            firstName: data.user.first_name,
            profileLink: data.user.links.html
        })
    })

    const userDataToSend = userData.map(data => {       // storing price, location, distance
        return ({
            id: data.id,
            price: data.price,
            distance: data.distance,
            location_city: data.location_city,
            location_country: data.location_country    
        })
    })


    // combining both data arrays into one
    const dataToSend = []
    for (let i = 0; i<12; i++){
        dataToSend[i] = {
            ...cardDataToSend[i],
            ...userDataToSend[i],
            rating: (Math.random() * (5.1 - 3) + 3).toFixed(1),     // generating random rating numbers
            noOfRatings: Math.floor(Math.random() * (15-3) + 3)     // generating random number of ratings
        }
    }

    return (
        <div className="card-grid">
            {dataToSend.map(item => {
                return <Card key = {item.id} dataRecieved = {item} />
            })}
        </div>
    );
}

export default CardSection;
