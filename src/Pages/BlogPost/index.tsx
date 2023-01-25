import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useLocation } from "react-router-dom";
import { DataPost } from "../../Interfaces/data-post";

import "./style.css";

export default function BlogPost() {
    // Máquina de estado
    const route = useLocation();
    const post: DataPost = route.state;

    return (
        <div className="page">
            <Header />

            <div className="content">
                <div className="container container-post">
                    <h2>{post.title}</h2>
                    <span>{post.date}</span>

                    {post.paragraphs.map((item, i) => (
                        <p key={`p-${i}`} className={(item.subtitle) ? "post-subtitle" : ""}>{item.text}</p>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}