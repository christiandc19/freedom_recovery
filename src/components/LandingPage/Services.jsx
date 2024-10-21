import React from 'react'
import './Services.css'
import { Link } from "react-router-dom";

import Drug_Addiction from '../../assets/alcohol_addiction_hero.webp'
import Dual_Diagnosis from '../../assets/cocaine_hero.webp'
import Mental_Health_Disorder from '../../assets/fentanyl_hero.webp'
import Outpatient_Rehab from '../../assets/xanax_section_image1.webp'
import Inpatient_Rehab from '../../assets/cannabis_hero.webp'

const Services = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };

  return (
    <div className='services'>
            <div className='servicesHeader'>
                <h1>What We Treat</h1>
                
            </div>

                <div className='servicesContent'>

                    <div className='servicesCard' onClick={scrollToTop}>
                        <Link to="/alcoholism">
                        <img src={Drug_Addiction} alt='Image' loading='lazy' />
                        <h1>Alcohol Addiction</h1>
                        <p>Comprehensive care to help individuals overcome addiction and reclaim their lives through personalized treatment programs and evidence-based therapies.</p>
                        </Link>

                    </div>

                    <div className='servicesCard' onClick={scrollToTop}>
                        <Link to="/cocaine-addiction-treatment">
                        <img src={Dual_Diagnosis} alt='Image' loading='lazy' />
                        <h1>Cocaine Addiction</h1>
                        <p>Dual diagnosis treatment addresses both addiction and co-occurring mental health disorders simultaneously, providing a comprehensive approach to recovery for individuals with complex needs.</p>
                        </Link>
                    </div>

                    <div className='servicesCard' onClick={scrollToTop}>
                        <Link to="/fentanyl-addiction-treatment">
                        <img src={Mental_Health_Disorder} alt='Image' loading='lazy' />
                        <h1>Fentanyl Addiction</h1>
                        <p>As California’s premier Los Angeles drug rehab,
                        we specialize in substance abuse</p>
                        </Link>
                    </div>

                    <div className='servicesCard' onClick={scrollToTop}>
                        <Link to="/meth-addiction-treatment">
                        <img src={Outpatient_Rehab} alt='Image' loading='lazy' />
                        <h1>Meth Addiction</h1>
                        <p>As California’s premier Los Angeles drug rehab,
                        we specialize in substance abuse</p>
                        </Link>
                    </div>

                    <div className='servicesCard' onClick={scrollToTop}>
                        <Link to="/cannabis-addiction-treatment">
                        <img src={Inpatient_Rehab} alt='Image' loading='lazy' />
                        <h1>Cannabis Addiction</h1>
                        <p>As California’s premier Los Angeles drug rehab,
                        we specialize in substance abuse</p>
                        </Link>
                    </div>

                </div>
        
    </div>
  )
}

export default Services
