import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

import { FaMedrt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { FaHouseChimneyMedical } from "react-icons/fa6";

import './Offer.css'

const Offer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };

  return (
    <div className='offer'>
        <div className='offerContent'>
            <div className='offerHeader'>
                <h1>Addiction Rehab Programs</h1>
                <hr />
            </div>

            <div className='offerFlex'>

                <div className='offerFlexItem'>

                    <div className='iconFlexItem'>
                        <div className='iconFlex borderRight'>
                            <div className='offerIcon'>
                                <h1><FaMedrt /></h1>
                            </div>
                            <div className='iconText borderBtm'>
                                <h2>Drug Addiction Treatment</h2>
                                <p>At Freedom Recovery, we offer specialized drug addiction treatment programs designed to help individuals break free from the cycle of substance abuse and reclaim their lives. Our compassionate, evidence-based approach ensures each client receives personalized care tailored to their unique recovery journey. <span><LinkRoll
                                activeClass="active"
                                to="top"
                                spy={true}
                                smooth={true}
                                duration={500}
                                ><Link to="/drug-addiction-treatment" onClick={scrollToTop}>Learn More</Link></LinkRoll></span></p>
                            </div>
                        </div>
                    </div>


                    <div className='iconFlexItem'>
                        <div className='iconFlex'>
                            <div className='offerIcon'>
                                <h1><FaHouseChimneyMedical /></h1>
                            </div>
                            <div className='iconText borderBtm'>
                                <h2>Heroin Treatment Program</h2>
                                <p>We specialize in comprehensive treatment for heroin addiction, offering a safe and supportive environment for recovery. Our evidence-based approach addresses both the physical and psychological aspects of addiction, helping individuals reclaim their lives from heroin dependency. <span><LinkRoll
                                activeClass="active"
                                to="top"
                                spy={true}
                                smooth={true}
                                duration={500}
                                ><Link to="/heroin-program" onClick={scrollToTop}>Learn More</Link></LinkRoll></span></p>
                            </div>
                        </div>
                    </div>


                    <div className='iconFlexItem'>
                        <div className='iconFlex borderRight'>
                            <div className='offerIcon'>
                                <h1><FaHouseUser /></h1>
                            </div>
                            <div className='iconText borderBtm'>
                                <h2>Xanax Addiction Treatment</h2>
                                <p>Xanax addiction can develop quickly, leading to physical dependence and severe withdrawal symptoms when attempting to quit. At Freedom Recovery, we offer a comprehensive, medically supervised treatment program designed to safely guide individuals through detox and provide the tools needed for long-term recovery. <span><LinkRoll
                                activeClass="active"
                                to="top"
                                spy={true}
                                smooth={true}
                                duration={500}
                                ><Link to="/xanax-rehab" onClick={scrollToTop}>Learn More</Link></LinkRoll></span></p>
                            </div>
                        </div>
                    </div>

                    <div className='iconFlexItem'>
                        <div className='iconFlex'>
                            <div className='offerIcon'>
                                <h1><FaHouseChimney /></h1>
                            </div>
                            <div className='iconText borderBtm'>
                                <h2>Ativan Addiction Treatment</h2>
                                <p>Ativan addiction can quickly develop due to its potent effects on the central nervous system, often leading to physical and psychological dependence. At Freedom Recovery, we provide specialized, compassionate treatment to help individuals safely overcome Ativan addiction and achieve lasting recovery. <span><LinkRoll
                                activeClass="active"
                                to="top"
                                spy={true}
                                smooth={true}
                                duration={500}
                                ><Link to="/ativan-rehab"onClick={scrollToTop} >Learn More</Link></LinkRoll></span></p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Offer
