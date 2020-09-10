import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Subject from '../components/Subject';
import Navbar from '../components/Navbar';

export default function Questions() {
    return (
        <>
        <Navbar/>
        <Hero hero='ques-hero'>
            <Banner title='Happy to help u!!!' subtitle='You will find every year paper here..' />
        </Hero>
        <Subject/>
        </>
    )
}
