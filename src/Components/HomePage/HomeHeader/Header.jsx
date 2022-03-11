import React from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.planeTreeBg}>
            <div className="container">
                <div className='row'>
                    <div className="col-sm-12">
                        <div className={styles.headerContent}>
                            <div className={styles.headerContentInner}>
                                <p className={`display-1 ${styles.mainHeading}`}>Lifelong memories just a</p>
                                <p className={`display-1 ${styles.subHeading}`}>few seconds away</p>
                                <p className={styles.headerParagraph}>Let’s start your journey with us, your dream will come true</p>
                                <button className="btn">Explore Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;