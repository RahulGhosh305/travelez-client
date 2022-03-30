import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './DestinationCart.module.css'
import { useNavigate } from 'react-router-dom';

AOS.init();

const DestinationCard = (props) => {
    const navigate = useNavigate()
    const handleSingleTourPage = () => {
        navigate('/singleTour')
    }
    const { photo, name, message, packagePrice, rating } = props.singleData
    return (
        <div onClick={() => handleSingleTourPage()} data-aos="zoom-in" data-aos-duration="2000" className="col-md-6 col-lg-4 mb-4">
            <div className={`card ${styles.customCard}`}>
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className={`card-title ${styles.tourTitle}`}>{name}</h3>
                    {/* <p class={`card-text ${styles.tourMessage}`}>{message}</p> */}
                    <h4 className={`card-text ${styles.tourMessage}`}>Tk {packagePrice}</h4>
                    <div className={`card-text ${styles.tourMessage}`}>
                        {rating}
                        <i><FontAwesomeIcon className="ms-2" icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;