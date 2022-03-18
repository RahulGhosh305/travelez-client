import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import styles from './HeaderSingleTour.module.css';
const HeaderSingleTour = () => {
    return (
        <>
            <Navbar />
            <div className={styles.headerWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h4>Shimla And Manali Tour Package</h4>
                                    <p>Seller : Travlez Tours Pvt Ltd </p>
                                </div>
                                <div>
                                    <p className="mb-0">Starting Forms</p>
                                    <h4 className="mb-0">15000 Tk.</h4>
                                    <h5 className="text-muted"><del>19000 Tk.</del></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-end">
                                <button className={`btn me-2 ${styles.singleTourBtn}`}>Book Now</button>
                                <button className={`btn ${styles.singleTourBtn}`}>Conact Host</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSingleTour;