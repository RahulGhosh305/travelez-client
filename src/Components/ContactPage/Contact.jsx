import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactHeader from './ContactHeader/ContactHeader';
import GetTouch from './GetTouch/GetTouch';
import Footer from '../Shared/Footer/Footer'
const Contact = () => {
    return (
        <div>
            <ContactHeader/>
            <GetTouch />
            <ContactForm/>
            <Footer />
        </div>
    );
};

export default Contact;