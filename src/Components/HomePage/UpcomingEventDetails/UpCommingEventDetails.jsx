import React, { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import travelPic from '../../../assets/travlePic.png';
import tourSaintMartin from '../../../assets/tourSaintMartin.jpg'
import styles from './UpCommingEventDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarWeek, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const UpCommingEventDetails = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const navigate = useNavigate()
    const handleBookNow = () => {
        navigate('/bookNow')
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <h4 className="display-4">Saint's Martin</h4>
                <div className="row">
                    <div className="col-md-8">
                        <img src={tourSaintMartin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <div className={styles.packageInfo}>
                            <h4 className="mt-3 text-danger">Book This Tour</h4>
                            <p className="lead">Starting Price 25000 Tk.</p>
                            <button onClick={()=> handleBookNow()} className={`btn ${styles.bookNowBtn}`}>Book Now</button>
                            <h3>Package : 25000 Tk. <del>30000 Tk.</del> </h3>
                            <p className="lead"><FontAwesomeIcon className="me-2" icon={faBed} /> 3 Days 2 Night</p>
                            <p className="lead"><FontAwesomeIcon className="me-3" icon={faCalendarWeek} />  12 May to 15 May </p>
                            <p className="lead"><FontAwesomeIcon className="me-3" icon={faUserAlt} /> 3 Peoples</p>
                        </div>
                    </div>
                </div>
            </div>
            <marquee className={styles.marqueeStyle}>
                <h4>You want to go beautiful place with your friends, family or partner. We are coming for you with your best destination. For Query Call Us: +880 1521 555 222</h4>
            </marquee>
            <div className="container">
                <div className="row">
                    <div>
                        <p className="lead"> St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip.</p>
                    </div>
                </div>

                <div className={styles.travelPic}>
                    <img src={travelPic} alt="" className="img-fluid" />
                </div>

                <div className={styles.horizontal}>
                    <hr />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UpCommingEventDetails;