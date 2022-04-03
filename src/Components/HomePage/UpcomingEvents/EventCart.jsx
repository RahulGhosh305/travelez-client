import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EventCart.module.css'


const EventCart = (props) => {
    const navigate = useNavigate()
    const handleSingleTourPage = () => {
        navigate('/upComingEventDetails')
    }
    const { displayPhoto, name, days, nights, message } = props.singleData
    return (
        <div onClick={() => handleSingleTourPage()} className={styles.containerDetails}>
            <div className={styles.image}>
                <img src={displayPhoto} alt="" className="img-fluid" />
            </div>

            <div className={styles.middleOverlay}>
                <div className={styles.overlayText}>
                    <div>
                        <h4 className="display-4">{name}</h4>
                        <p className={styles.eventPlanText}>{days} Days {nights} Nights</p>
                        <p className={styles.eventMessage}> {message} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCart;