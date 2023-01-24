import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Home() {
    return (
        <div className="page">
            <Header />

            <div className="content">
                <div className="container container-home">
                    <p>Sinta-se em casa, caríssimo visitante. Neste espaço comento sobre minha prática cotidiana, na tentativa de combinar aquilo que foi separado. É simples segregar tecnologia do ser humano, mas o mundo é mais complexo do que o singelo reducionismo indolente. Aceite a contradição e siga comigo por esta jornada.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}