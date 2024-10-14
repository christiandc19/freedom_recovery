import React from 'react'
import './Services.css'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Drug_Addiction from '../../assets/drug_addiction.webp'
import Dual_Diagnosis from '../../assets/dual_diagnosis.webp'
import Mental_Health_Disorder from '../../assets/mental_health_disorder.webp'
import Outpatient_Rehab from '../../assets/outpatient_rehab.webp'
import Inpatient_Rehab from '../../assets/inpatient_rehab.webp'

const Services = () => {
  return (
    <div className='services'>
            <div className='servicesHeader'>
                <h1>What We Treat</h1>
                
            </div>

                <div className='servicesContent'>

                    <div className='servicesCard'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true}duration={500}>
                        <Link to="/addiction-rehab">
                        <img src={Drug_Addiction} alt='Image' loading='lazy' />
                        <h1>Addiction Rehab</h1>
                        <p>Comprehensive care to help individuals overcome addiction and reclaim their lives through personalized treatment programs and evidence-based therapies.</p>
                        </Link>
                        </LinkRoll>

                    </div>

                    <div className='servicesCard'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true}duration={500}>
                        <Link to="/dual-diagnosis-program">
                        <img src={Dual_Diagnosis} alt='Image' loading='lazy' />
                        <h1>Dual Diagnosis</h1>
                        <p>Dual diagnosis treatment addresses both addiction and co-occurring mental health disorders simultaneously, providing a comprehensive approach to recovery for individuals with complex needs.</p>
                        </Link>
                        </LinkRoll>
                    </div>

                    <div className='servicesCard'>
                        <img src={Mental_Health_Disorder} alt='Image' loading='lazy' />
                        <h1>Mental Health Disorders</h1>
                        <p>At Antioch Rehab, we provide compassionate, evidence-based treatment for a wide range of mental health disorders, helping individuals achieve lasting emotional and psychological well-being.</p>
                    </div>

                    <div className='servicesCard'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true}duration={500}>
                        <Link to="/medication-assisted-program">
                        <img src={Outpatient_Rehab} alt='Image' loading='lazy' />
                        <h1>Medication Assisted Treatment</h1>
                        <p>As California’s premier Los Angeles drug rehab,
                        we specialize in substance abuse</p>
                        </Link>
                        </LinkRoll>
                    </div>

                    <div className='servicesCard'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true}duration={500}>
                        <Link to="/veterans-addiction-treatment-program">
                        <img src={Inpatient_Rehab} alt='Image' loading='lazy' />
                        <h1>Veterans Addiction</h1>
                        <p>As California’s premier Los Angeles drug rehab,
                        we specialize in substance abuse</p>
                        </Link>
                        </LinkRoll>
                    </div>

                </div>
        
    </div>
  )
}

export default Services
