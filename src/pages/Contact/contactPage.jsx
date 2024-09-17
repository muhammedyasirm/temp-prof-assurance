import React from 'react'; 
import ContactForm from '../../components/ContactForm/contactForm';
import ContactBanner from '../../components/ContactBanner/conatctBanner';

const ContactPage = () => {
    return (
        <>
            <ContactBanner />
            <ContactForm />
        </>
    )
}

export default ContactPage;