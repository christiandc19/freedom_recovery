import React from 'react'
import './InpatientRehab.css'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import InpatientRehabSection from './InpatientRehabSection'


const InpatientRehab = () => {
    return (
<>        
<div className='inpatient-program'>
        <div className="inpatient-program-content container">
            <div>
                <h1>Inpatient Program</h1>
                <h2>Discover The Therapies & Modalities We Use To Help Patients Recover</h2>
            </div>
        </div>

</div>
<InpatientRehabSection />
<Insurance />
<Services />
<ContactForm />
</>


    )
}

export default InpatientRehab
