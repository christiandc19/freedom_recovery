import React from 'react'
import './VeteransAddictionHero.css'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import VeteransAddictionSection from './VeteransAddictionSection'


const VeteransAddictionHero = () => {
    return (
<>        
<div className='veteransAddictionHero'>
    <div className="veteransAddictionHeroContainer">

        <div className="veteransAddictionHeroContent">
            <div>
                <h1>Veterans Addiction Treatment Program</h1>
            </div>
        </div>

    </div>
</div>
<VeteransAddictionSection />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default VeteransAddictionHero
