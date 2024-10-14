import React from 'react'
import './OutpatientRehab.css'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import OutpatientRehabSection from './OutpatientRehabSection'


const OutpatientRehab = () => {
    return (
<>        
<div className='outpatient-program'>
        <div className="outpatient-program-content container">
            <div>
                <h1>Outpatient Program</h1>
                <h2>Discover The Therapies & Modalities We Use To Help Patients Recover</h2>
            </div>
        </div>

</div>
<OutpatientRehabSection />
<Insurance />
<Services />
<ContactForm />
</>


    )
}

export default OutpatientRehab
