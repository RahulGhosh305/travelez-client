import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import GetTouch from './GetTouch/GetTouch';
import Bus from './Bus/Bus';
import Header from './HomeHeader/Header';
import Info from './Info/Info';
import OurStory from './OurStory/OurStory';
import PopularDestination from './PopularDestination/PopularDestination';
import UpcomingEvent from './UpcomingEvents/UpcomingEvent';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Bus/>
            <Info/>
            <UpcomingEvent />
            <OurStory/>
            <PopularDestination/>
            <GetTouch/>
            <Footer/>
        </>
    );
};

export default Home;