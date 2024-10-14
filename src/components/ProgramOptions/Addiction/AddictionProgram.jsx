import React from 'react'
import './AddictionProgram.css'

import ContactForm from '../../LandingPage/ContactForm'
import AddictionRehabSection from './AddictionRehabSection'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'

const Addiction = () => {
    return (
<>        
<div className='addiction-program'>
        <div className="addiction-program-content container">
            <div>
                <h1>Alcohol Addiction Treatment Program</h1>
                <h2>Discover The Therapies & Modalities We Use To Help Patients Recover</h2>
            </div>
        </div>

</div>
<AddictionRehabSection />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default Addiction
