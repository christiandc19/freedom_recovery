import React from 'react'
import './DualDiagnosis.css'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './DualDiagnosisProgram'
import Services from '../../LandingPage/Services'
import Insurance from '../../LandingPage/Insurance'


const DualDiagnosis = () => {
    return (
<>        
<div className='dualDiagnosis'>
    <div className="dualDiagnosisContainer">

        <div className="dualDiagnosisContent">
            <div>
                <h1>Dual Diagnosis</h1>
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

export default DualDiagnosis
