import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home';
import About from '../AboutPage/About';
import Tour from '../TourPage/Tour';
import Blog from '../BlogPage/Blog';
import Contact from '../ContactPage/Contact';

const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AllRoute;