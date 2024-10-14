import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import DrugAddictionTreatment from './HeroinProgram'
import './HeroinProgramHero.css'
import Services from '../../LandingPage/Services'

const HeroinProgramHero = () => {
    return (
<>        
<div className='heroinProgramOptions'>
    <div className="heroinProgramOptionsContainer">

        <div className="heroinProgramOptionsContent">
            <div>
                <h1>Heroin Program</h1>
                <h2>Creating stability in recovery.</h2>
            </div>
        </div>

    </div>
</div>
<DrugAddictionTreatment />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default HeroinProgramHero
