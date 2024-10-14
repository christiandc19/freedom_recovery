import React from 'react'
import './DetoxProgram.css'

import ContactForm from '../../LandingPage/ContactForm'
import DetoxProgramSection from './DetoxProgramSection'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'


const DetoxProgram = () => {
    return (
<>        
<div className='detox-program'>
        <div className="detox-program-content container">
            <div>
                <h1>Drug Detox Program</h1>
                <h2>Discover The Therapies & Modalities We Use To Help Patients Recover</h2>
            </div>
        </div>

</div>
<DetoxProgramSection />
<Insurance />
<Services />
<ContactForm />
</>


    )
}

export default DetoxProgram
