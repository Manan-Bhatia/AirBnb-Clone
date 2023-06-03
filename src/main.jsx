import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import CardSection from "./Components/CardSection";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Nav />
        <Hero />
        <CardSection />
    </React.StrictMode>
);
