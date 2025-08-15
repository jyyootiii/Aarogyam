import React from 'react';

import MainComponent from "../componets/MainComponent";
import Carasol from "../componets/Carasol";
import TestimonialSection from "../componets/TestimonialSection ";
import Footer from "../componets/Footer";
import Events from '../componets/Events';
import Header from '../componets/Header';

export default function Homepage(){

    return (
        <>
        <Header/>

        <Carasol/>
        
        <Events/>
        <TestimonialSection/>
        <Footer/>
        </>
    )

}