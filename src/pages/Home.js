import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
        <Navbar/>
        <Hero hero='default-hero' >
            <Banner title='We <3 to help u!!' subtitle='Get all question papers here...'/>
        </Hero>
        <Services/>
        </>
    )
}
