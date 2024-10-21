import React from 'react';
import './DetoxProgramSection.css';
import DrugOverdose from '../../../assets/woman_pills_overdose_drug_abuse.webp';  // Add relevant images
import heroinImage from '../../../assets/psychologist-talking-with-patient-on-therapy-session.webp';

const DetoxProgramSection = () => {
  return (
    <div className="detox-section-container">
      <section className="detox-intro-section">
        <h1>Drug Detox Program at Freedom Recovery Center
        </h1>
        <p>
        At Freedom Recovery Center, our Drug Detox Program provides a medically supervised and compassionate environment for individuals looking to break free from substance addiction. Detox is the critical first step in the recovery process, focusing on safely managing withdrawal symptoms while preparing the body and mind for long-term treatment.
        </p>
      </section>



      <div className="detox-section-program flex-reverse container">

        <div className="detox-section-program-image DrugOverdose-bg">
            <img src={DrugOverdose} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>

        <div className="detox-section-program-content">
          <h2>Why Choose Our Drug Detox Program?</h2>
          <p>
            <ul>
            <li>Medical Supervision: Our experienced medical team closely monitors each individual 24/7 to ensure safety during the detoxification process. We help manage symptoms and provide medications, if necessary, to ease the discomfort of withdrawal.</li>
            <li>Personalized Detox Plans: Each patient receives a customized detox program tailored to their specific needs, depending on the substances involved, the duration of addiction, and their health history.</li>
            <li>Safe Environment: Detoxing from drugs can be physically and emotionally challenging. Our comfortable, private facilities offer a safe, secure, and supportive space for healing.</li>
            </ul>
          </p>
        </div>
      </div>


      <div className="detox-section-program container">



        <div className="detox-section-program-content">
            <h2>Understanding the Detox Process</h2>
            <p>1. Evaluation <br />The detox process begins with a thorough medical assessment, including physical and psychological evaluations. Our team reviews each patient’s medical history, substance use, and current health status to create a tailored detox plan.</p>
            <p>2. Stabilization <br />Once the plan is established, the patient enters the stabilization phase. During this time, our medical professionals provide care to alleviate withdrawal symptoms and reduce cravings, ensuring the body safely adjusts as substances are cleared.</p>
            <p>3.Transition to Long-Term Treatment <br />After the detox phase, individuals are ready to begin their journey into long-term treatment. Detox alone does not address the underlying psychological aspects of addiction. We help transition patients into comprehensive rehab programs, including therapy and counseling, to support their sustained recovery.</p>
          </div>
        <div className="detox-section-program-image psychologist-talking-with-patient">
            <img src={heroinImage} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>


      </div>


      
    </div>
  );
};

export default DetoxProgramSection;
