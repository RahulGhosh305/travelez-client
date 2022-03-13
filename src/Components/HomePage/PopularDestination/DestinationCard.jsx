import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './DestinationCart.module.css'

AOS.init();
const DestinationCard = (props) => {
    const { photo, name, message, packagePrice, rating } = props.singleData
    return (
        <div data-aos="zoom-in" className="col-md-6 col-lg-4 mb-4">
            <div class="card">
                <img src={photo} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class={`card-title ${styles.tourTitle}`}>{name}</h5>
                    <p class={`card-text ${styles.tourMessage}`}>{message}</p>
                    <p class={`card-text ${styles.tourMessage}`}>Package: {packagePrice} Taka</p>
                    <div class={`card-text ${styles.tourMessage}`}>
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