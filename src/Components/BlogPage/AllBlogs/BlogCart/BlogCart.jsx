import React from 'react';
import styles from './BlogCart.module.css'
import blogPostImg1 from '../../../../assets/blogPostImg1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons';
const BlogCart = () => {
    return (

            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                        <p>#Food, #Lifestyle</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <p className="me-2">Jone Doe</p>
                        <p><FontAwesomeIcon icon={faUser} /></p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <p className="me-2">12 Dec, 2017</p>
                        <p><FontAwesomeIcon icon={faCalendar} /></p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <p className="me-2">1.2M View</p>
                        <p><FontAwesomeIcon icon={faEye} /></p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <p className="me-2">19 Comments</p>
                        <p><FontAwesomeIcon icon={faComment} /></p>
                    </div>
                </div>
                <div className="col-md-9">
                    <div>
                        <img src={blogPostImg1} alt="" className="img-fluid" />
                        <div className="my-3">
                            <h2 className={styles.blogCartTitle}>Astronomy Binoculars A Great Alternative</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente a consectetur nam laborum eum temporibus, quia tempore obcaecati velit, quaerat vero blanditiis, ab aliquid ut tempora illum perspiciatis dolorum deserunt sequi.</p>
                            <button className={`btn ${styles.blogCartBtn}`}>View more</button>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default BlogCart;