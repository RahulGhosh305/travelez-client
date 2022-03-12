import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Bus from './Bus/Bus';
import Header from './HomeHeader/Header';
import Info from './Info/Info';
import PopularDestination from './PopularDestination/PopularDestination';
import UpcomingEvent from './UpcomingEvents/UpcomingEvent';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Bus/>
            <Info/>
            <UpcomingEvent />
            <PopularDestination/>
        </>
    );
};

export default Home;