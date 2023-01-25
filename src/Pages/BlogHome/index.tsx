import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { DataPost } from "../../Interfaces/data-post";

import "./style.css";

export default function BlogHome() {
    // Máquina de estado
    const [posts, setPosts] = React.useState([] as Array<DataPost>);
    const navigate = useNavigate();

    function goPost(index: number) {
        navigate("/post", { state: posts[index] });
    }
    
    async function load() {
        // Carrega textos para blog
        const req = await fetch("/posts.json");
        const res: Array<DataPost> = await req.json();
        
        // Ordena os registros do mais recente para o mais antigo
        res.sort((a, b) => {
            const dta = (new Date(a.date)).getTime();
            const dtb = (new Date(b.date)).getTime();

            if(dta > dtb)
                return -1;
            else if(dta < dtb)
                return 1;
            else
                return 0;
        });
        setPosts(res);
    }

    React.useEffect(() => {
        load();
    }, []);

    return (
        <div className="page">
            <Header />

            <div className="content">
                <div className="container list-posts">
                    {posts.map((post, i) => (
                        <div className="post" key={`post-${i}`}>
                            <h4 onClick={() => goPost(i)}>{post.title}</h4>
                            <span>{post.date}</span>
                            <p>{
                                (post.paragraphs[0].text.length > 294)
                                ? post.paragraphs[0].text.slice(0, 294)
                                : post.paragraphs[0].text
                            } [...]</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}