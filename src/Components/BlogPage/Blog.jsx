import React from 'react';
import AllBlogs from './AllBlogs/AllBlogs';
import BlogHeader from './BlogHeader/BlogHeader';
import Footer from '../Shared/Footer/Footer'
const Blog = () => {
    return (
        <div>
            <BlogHeader />
            <AllBlogs />
            <Footer />
        </div>
    );
};

export default Blog;