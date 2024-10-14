import React from 'react'
import './MAT.css'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './MATProgram'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'


const Mat = () => {
    return (
<>        
<div className='matHero'>
    <div className="matHeroContainer">

        <div className="matHeroContent">
            <div>
                <h1>Medication Assisted Program</h1>
            </div>
        </div>

    </div>
</div>
<DualDiagnosisProgram />
<Insurance />
<Services />
<ContactForm />
</>


    )
}

export default Mat
