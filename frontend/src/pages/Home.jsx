import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import IndustryCases from '../components/IndustryCases';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Premier IT & Engineering Solutions"
                description="Powering IT, Manufacturing, Processing & Agriculture with Talent and Technology. Specialized IT and engineering solutions for global industries."
                path="/"
            />
            <Hero />
            <section id="about">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="why-us">
                <WhyUs />
            </section>
            <section id="industry-cases">
                <IndustryCases />
            </section>
            <section id="contact">
                <ContactForm />
            </section>
        </>
    );
};

export default Home;
