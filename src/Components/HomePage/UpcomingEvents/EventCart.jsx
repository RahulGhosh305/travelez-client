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
                    <h4 className="pt-1">{name}</h4>
                    <h6>{plan}</h6>
                    <div className={styles.socialIcons}>
                        <i></i><i></i><i></i>
                    </div>
                    <p> {message} </p>
                </div>
            </div>
        </div>
    );
};

export default EventCart;