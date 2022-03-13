import React from 'react';
import styles from './Blog.module.css'
import blogSiteImage from '../../../assets/blogSiteImage.jpg'
import BlogCart from './BlogCart';
import BlogData from './BlogData'
const Blog = () => {
    return (
        <div className={styles.blogWrapper}>
            <div className="text-center mb-5">
                <p className="lead mb-0">Recent Blog</p>
                <h4 className="display-4">Tips and Articles</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-auto">
                        {
                            BlogData.map(singleData => <BlogCart singleData={singleData} key={Math.random()}/> )
                        }
                    </div>
                    <div className="col-md-4">
                        <img src={blogSiteImage} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;