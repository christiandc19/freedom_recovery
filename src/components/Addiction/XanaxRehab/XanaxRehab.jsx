import React from 'react'
import './XanaxRehab.css'

import ContactForm from '../../LandingPage/ContactForm'
import OutpatientRehabSection from './XanaxRehabSection'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'


const XanaxRehab = () => {
    return (
<>        
<div className='xanaxRehab'>
    <div className="xanaxRehabContainer">

        <div className="xanaxRehabContent">
            <div>
                <h1>Xanax Rehab</h1>
                <h2>Creating stability in recovery.</h2>
            </div>
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

export default XanaxRehab
