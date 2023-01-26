import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { DataReading } from "../../Interfaces/data-reading";

import "./style.css";

export default function Reading() {
    // Máquina de estado
    const [readings, setReadings] = React.useState([] as Array<DataReading>);

    async function render() {
        const req = await fetch("/readings.json");
        const res = await req.json();
        setReadings(res);
    }

    React.useEffect(() => { render() }, []);

    return (
        <div className="page">
            <Header />

            <div className="content">
                <div className="container container-reading">
                    <p className="intro">Não tenho como objetivo aqui criar review ou listar recomendações. É impossível separar o que produzimos daquilo que consumimos, por isso acho honesto compartilhar, além dos meus textos, obras que consumi e de alguma forma deixaram algum impacto no meu pensamento. Não separarei temas técnicos de ficção, nem segregarei pelo timo de mídia. Estou em constante mudança, então espero que esta página seja um possível registro dessa minha caminhada.</p>

                    {readings.map((item, i) => (
                        <div className="reading-post" key={`reading-${i}`}>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}