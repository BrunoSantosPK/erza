import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useLocation, useParams } from "react-router-dom";
import { DataPost } from "../../Interfaces/data-post";

import "./style.css";

export default function BlogPost() {
    // Máquina de estado
    const [post, setPost] = React.useState({} as DataPost);
    const [loaded, setLoaded] = React.useState(false);
    const param = useParams();

    // Recupera dados de leitura
    async function load() {
        const req = await fetch("/posts.json");
        const res: Array<DataPost> = await req.json();

        res.forEach(item => {
            if(item.id === parseInt(param.id as string)) {
                setPost(item);
                setLoaded(true);
            }
        });
    }

    React.useEffect(() => { load(); }, [param]);

    return (
        <div className="page">
            <Header />

            <div className="content">
                <div className="container container-post">
                    {loaded && <div>
                        <h2>{post.title}</h2>
                        <span>{post.date}</span>

                        {post.paragraphs.map((item, i) => (
                            <p key={`p-${i}`} className={(item.subtitle) ? "post-subtitle" : ""}>{item.text}</p>
                        ))}
                    </div>}
                </div>
            </div>

            <Footer />
        </div>
    );
}