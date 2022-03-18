import React from 'react';
import styles from './PackageCart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import tour1 from '../../../assets/tour1.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
AOS.init();

const PackageCart = () => {
    const navigate = useNavigate()
    const handleSingleTourPage = () => {
        navigate('/singleTour')
    }
    return (
        <div onClick={ ()=> handleSingleTourPage() } data-aos="fade-up" data-aos-duration="2000" className="col-md-6 mb-4">
            <div className="card border-0">
                <div className={styles.cardCustom}>
                    <div className={styles.imgDiv}>
                        <img src={tour1} className="card-img-top" alt="..." />
                        <div className={styles.imgPack}><h4>15000 Tk/3 days</h4></div>
                    </div>
                    <div className="card-body">
                        <div>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>

                            <p className={`card-title ${styles.tourText}`}>521 review</p>
                        </div>
                        <h5 className={`card-title ${styles.tourTitle}`}>Saint Martin Iecland</h5>
                        <p className={`card-title ${styles.tourText}`}>Some quickand make up</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCart;