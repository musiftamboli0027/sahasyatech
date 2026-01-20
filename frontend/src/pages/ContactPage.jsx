import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with Sahasya Talent and Technology for your IT and engineering requirements. We are here to help you scale."
                path="/contact"
            />
            <ContactForm />
        </div>
    );
};

export default ContactPage;
