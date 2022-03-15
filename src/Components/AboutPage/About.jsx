import React from 'react';
import Header from './AboutHeader/Header';
import FAQ from './FAQ/FAQ';
import KnowUs from './KnowUs/KnowUs';
import BoatAndSea from './BoatAndSea/BoatAndSea'
import Counter from './Counter/Counter';
import Footer from '../Shared/Footer/Footer'

const About = () => {
    return (
        <div>
            <Header/>
            <KnowUs/>
            <FAQ/>
            <BoatAndSea />
            <Counter/>
            <Footer />
        </div>
    );
};

export default About;