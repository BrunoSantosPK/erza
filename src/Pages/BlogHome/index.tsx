import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.css";

interface DataPost {
    title: string;
    date: string;
    paragraphs: Array<{
        text: string,
        subtitle: boolean
    }>;
}

export default function BlogHome() {
    // Máquina de estado
    const [posts, setPosts] = React.useState([] as Array<DataPost>);
    
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
                    {posts.map(post => (
                        <div className="post">
                            <h4>{post.title}</h4>
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