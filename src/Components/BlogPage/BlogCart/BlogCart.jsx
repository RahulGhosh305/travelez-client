import React from 'react';
import styles from './BlogCart.module.css'
import blogPostImg1 from '../../../assets/blogPostImg1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const BlogCart = (props) => {
    const {photo, tag, date, authorName, title, subTitle} = props.singleData
    const navigate = useNavigate()
    const handleSingleBlogPage = () => {
        navigate('/singleBlog')
    }
    return (

            <div data-aos="fade-up" data-aos-duration="2000" className="row mb-4">
                <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                        <p>#{tag}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <p className="me-2">{authorName}</p>
                        <p><FontAwesomeIcon icon={faUser} /></p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <p className="me-2">{date}</p>
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
                        <img src={photo} alt="" className="img-fluid" />
                        <div className="my-3">
                            <h2 className={styles.blogCartTitle}>{title}</h2>
                            <p className="lead">{subTitle}</p>
                            <button onClick={() => handleSingleBlogPage()} className={`btn ${styles.blogCartBtn}`}>View more</button>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default BlogCart;