import React from "react";
import { GiAngelOutfit } from "react-icons/gi"
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function Header() {
    const navigate = useNavigate();
    const directions = {
        home: () => navigate("/"),
        reading: () => navigate("/reading"),
        blog: () => navigate("/blog")
    };

    return (
        <div className="header">
            <div className="brand" onClick={directions.home}>
                <GiAngelOutfit />
                <h1>Bruno Santos</h1>
            </div>

            <div className="menu">
                <div className="menu-item">
                    <h4 onClick={directions.reading}>Leituras</h4>
                </div>
                <div className="menu-item">
                    <h4 onClick={directions.blog}>Blog</h4>
                </div>
            </div>
        </div>
    );
}