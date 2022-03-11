import React from 'react';
import styles from './Info.module.css'
import beach from '../../../assets/beach.svg'
import wallet from '../../../assets/wallet.svg'
import suitcase from '../../../assets/suitcase.svg'
const Info = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className={styles.infoCart}>
                        <img src={beach} alt="" className={`img-fluid ${styles.infoImg}`}/>
                        <div className="ms-4">
                            <h5 className="mb-0">Top Destinations</h5>
                            <p>Nulla pretium tincidunt felis, nec</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.infoCart}>
                        <img src={wallet} alt="" className={`img-fluid ${styles.infoImg}`}/>
                        <div className="ms-4">
                            <h5 className="mb-0">The Best Prices</h5>
                            <p>Nulla pretium tincidunt felis, nec</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.infoCart}>
                        <img src={suitcase} alt="" className={`img-fluid ${styles.infoImg}`}/>
                        <div className="ms-4">
                            <h5 className="mb-0">Amazing Services</h5>
                            <p>Nulla pretium tincidunt felis, nec</p>
                        </div>
                    </div>
                </div>
                <hr  className={styles.horizontal} />
            </div>
        </div>
    );
};

export default Info;