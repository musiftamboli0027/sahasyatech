import React, { useEffect } from 'react';
import About from '../components/About';
import SEO from '../components/SEO';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <SEO
                title="About Us"
                description="Learn about Sahasya Talent and Technology, our mission, vision, and the leadership team driving industrial innovation."
                path="/about"
            />
            <About />
        </div>
    );
};

export default AboutPage;
