import React from 'react';
import styles from './NewsLetter.module.css'
import newsLetterImg from '../../../assets/newsLetterImg.webp'
const NewsLetter = () => {
    return (
        <div className={styles.newsLetterWrapper}>
            <div className="container">
                <div className="row">
                    <div className="jusify-content-center mb-5">
                        <div className="text-center">
                            <p className="lead mb-0">NewsLetter</p>
                            <h4 className="display-4">Get touch with us</h4>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className="mb-4">
                            <h1 className={styles.newsLtterTitle}>SubscribeTo Get Updated For Our Newsletter</h1>
                            <p className="lead">Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind. <strong className="fw-bold"> – Anthony Bourdain</strong> </p>

                            <div className="row">
                                <div className="col-md-8">
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="email" placeholder="E-Mail" />
                                        <button className={`btn ${styles.newsLetterBtn}`} type="submit">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className={styles.imgDiv}>
                            <div className={styles.imgStyle}>
                                <img src={newsLetterImg} alt="News Letter Pic" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;