import React from 'react';
import Banner from '../../Componets/Banner/Banner';
import HomeAbout from '../../Componets/HomeAbout/HomeAbout';
import Skills from '../../Componets/Skills/Skills';
import ContactSection from '../../Componets/Contact/ContactSection';
import HomePortfolio from '../../Componets/HomePortfolio/HomePortfolio';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <HomeAbout></HomeAbout>
        <Skills></Skills>
        <HomePortfolio></HomePortfolio>
        <ContactSection></ContactSection>
        </div>
    );
};

export default Home;