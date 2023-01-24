import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import BlogHome from "./Pages/BlogHome";
import BlogPost from "./Pages/BlogPost";
import Reading from "./Pages/Reading";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/post" element={<BlogPost />} />
                <Route path="/reading" element={<Reading />} />
            </Routes>
        </BrowserRouter>
    );
}