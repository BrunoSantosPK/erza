import React from "react";

import "./style.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="description">
                <p>Engenheiro e desenvolvedor, no caminho de compreender o mundo com maior amplitude e compartilhando os passos de cada descoberta.</p>
            </div>

            <div className="contact">
                <p>Cachoeiro de Itapemirim, ES</p>
                <p>bruno.19ls@gmail.com</p>
                <a href="https://github.com/BrunoSantosPK" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
    );
}