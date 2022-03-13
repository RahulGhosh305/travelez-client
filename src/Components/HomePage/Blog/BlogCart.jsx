import React from 'react';
import styles from './BlogCart.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();
const BlogCart = (props) => {
    const { photo, title, date, message } = props.singleData
    return (
        <div data-aos="fade-right" data-aos-duration="2000" className={styles.cartWrapper}>
            <div className="card border-0">
                <div className="row g-0">
                    <div className="col-md-4 $">
                        <div className={styles.imgDiv}>
                            <div className={styles.imgStyle}>
                                <img src={photo} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className={styles.date}>{date}</h5>
                            <h3 className={`card-title ${styles.blogTitle}`}>{title}</h3>
                            <p className={styles.blogSubMessage}>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;