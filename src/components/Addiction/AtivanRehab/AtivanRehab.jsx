import React from 'react'
import './AtivanRehab.css'

import ContactForm from '../../LandingPage/ContactForm'
import AtivanRehabSection from './AtivanRehabSection'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'


const AtivanRehab = () => {
    return (
<>        
<div className='ativanRehab'>
    <div className="ativanRehabContainer">

        <div className="ativanRehabContent">
            <div>
                <h1>Ativan Rehab</h1>
                <h2>Creating stability in recovery.</h2>
            </div>
        </div>

    </div>
</div>
<AtivanRehabSection />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default AtivanRehab
