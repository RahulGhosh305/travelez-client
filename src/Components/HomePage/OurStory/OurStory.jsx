import React from 'react';
import runningMan from '../../../assets/runnigMan.jpg'
import styles from './OurStory.modul.css'
const OurStory = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={runningMan} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 my-auto">
                    <p className="lead mb-0">Our Story</p>
                    <h4 className="display-4">Get ready for real time adventure</h4>
                    <p className="lead pt-4">Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;