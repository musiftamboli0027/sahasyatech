import React, { useEffect } from 'react';
import Services from '../components/Services';
import SEO from '../components/SEO';
import WhyUs from '../components/WhyUs';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <SEO
                title="Our Services"
                description="Specialized IT talent, mechanical support, processing industry staffing, digital growth, and agricultural innovation services."
                path="/services"
            />
            <Services />
            <WhyUs />
        </div>
    );
};

export default ServicesPage;
