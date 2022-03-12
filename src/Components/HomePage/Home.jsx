import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Bus from './Bus/Bus';
import Header from './HomeHeader/Header';
import Info from './Info/Info';
import UpcomingEvent from './UpcomingEvents/UpcomingEvent';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Bus/>
            <Info/>
            <UpcomingEvent />
        </>
    );
};

export default Home;