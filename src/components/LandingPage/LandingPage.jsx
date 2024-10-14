import React from 'react'
import './LandingPage.css'

import ContactForm from '../LandingPage/ContactForm'
import Insurance from './Insurance'


import RectBlock from './RectBlock'
import Offer from './Offer'
import AccordionProps from './AccordionProps'
import About from './About'
import Slider from './ImageSlider'


const Hero = () => {
    return (
<>        
<div className='hero'>
    <div className="hero-container">

        <div className="content">
                <h1>Los Angeles' Premier Drug Rehab: Luxury Alcohol Detox & Addiction Recovery Program</h1>
                <p>Medication-Assisted Inpatient & Outpatient Drug and Alcohol Addiction Treatment at our Los Angeles Rehab, serving the greater LA area.</p>
        </div>

    </div>
</div>
<RectBlock />
<About />
<Slider />
<Offer />
<AccordionProps />
<Insurance />
<ContactForm />
</>


    )
}

export default Hero