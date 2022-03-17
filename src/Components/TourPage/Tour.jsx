import React from 'react';
import Packages from './Packages/Packages';
import TourHeader from './TourHeader/TourHeader';
import Footer from '../Shared/Footer/Footer';

const Tour = () => {
    return (
        <>
            <TourHeader/>
            <Packages />
            <Footer />
        </>
    );
};

export default Tour;