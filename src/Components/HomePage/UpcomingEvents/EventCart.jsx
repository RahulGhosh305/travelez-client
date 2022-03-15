import React from 'react';
import styles from './EventCart.module.css'


const EventCart = (props) => {
    const { photo, name, plan, message } = props.singleData
    return (
        <div className={styles.containerDetails}>
            <div className={styles.image}>
                <img src={photo} alt="" className="img-fluid" />
            </div>

            <div className={styles.middleOverlay}>
                <div className={styles.overlayText}>
                    <div>
                        <h4 className="display-4">{name}</h4>
                        <p className={styles.eventPlanText}>{plan}</p>
                        <p className={styles.eventMessage}> {message} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCart;