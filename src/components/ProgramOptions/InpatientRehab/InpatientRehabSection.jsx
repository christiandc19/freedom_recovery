import React from 'react';
import './InpatientRehabSection.css';
import ImageOne from '../../../assets/therapy-session-young-man.webp';  // Add relevant images
import heroinImage from '../../../assets/woman-psychologist-in-glasses.webp';

const InpatientRehabSection = () => {
  return (
    <div className="inpatientRehab-container">
      <section className="intro-section">
        <h1>Comprehensive Inpatient Drug Rehab Program at Freedom Recovery Center
        </h1>
        <p>
        At Freedom Recovery Center, we provide a holistic and evidence-based Inpatient Drug Rehab Program designed to support individuals on their journey to long-term recovery from drug addiction. Our inpatient program ensures a safe, structured, and supportive environment where patients can focus entirely on their healing, free from external triggers and distractions.
        </p>
      </section>



      <div className="inpatientRehab-program flex-reverse container">

        <div className="inpatientRehab-program-image imageOne-bg">
            <img src={ImageOne} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>

        <div className="inpatientRehab-program-content">
          <h2>Inpatient Drug Rehab Program Overview:</h2>
          <p>
            <ul>
            <li>24/7 Medical and Emotional Support:Our inpatient drug rehab program offers round-the-clock medical care and emotional support. Addiction specialists, nurses, and therapists are available 24/7 to help manage withdrawal symptoms, monitor progress, and provide individualized care.</li>
            <li>Individualized Treatment Plans: We understand that no two individuals experience addiction in the same way. Our program begins with a thorough assessment to create a personalized treatment plan tailored to each patient's specific needs, including the type of drug addiction, the severity of the condition, and co-occurring mental health disorders.</li>
            <li>Detoxification Services: The first step in recovery is detox. Our experienced medical team ensures a safe and comfortable detox process, using medications and therapies to alleviate the physical and emotional symptoms of withdrawal. The detox phase is monitored closely to ensure patients are stabilized before transitioning into therapy.</li>
            <li>Dual Diagnosis Treatment: Many individuals struggling with addiction also experience co-occurring mental health disorders, such as anxiety, depression, or trauma. Our dual diagnosis program ensures that both addiction and mental health issues are treated simultaneously, giving patients the tools they need to achieve and maintain sobriety.</li>
            <li>Family Therapy and Support: We believe family involvement is critical to recovery. Our inpatient program offers family therapy sessions to help repair relationships and educate loved ones on how to provide effective support. We also offer educational resources and support groups for family members.</li>
            </ul>
          </p>
        </div>
      </div>


      <div className="inpatientRehab-program container">



        <div className="inpatientRehab-program-content">
            <h2>Why Choose Antioch Inpatient Rehab?</h2>
            <p>1. Experienced Professionals: <br />Our team of addiction specialists, therapists, and medical professionals bring years of experience to the table.</p>
            <p>2. Holistic Approach <br />In addition to traditional therapies, we offer yoga, meditation, and nutritional counseling to promote overall well-being.
            </p>
            <p>3. Safe and Supportive Environment <br />Our inpatient facility provides a peaceful, secure environment conducive to healing and growth.</p>
            <p>4. Comprehensive Care  <br />We address both addiction and mental health, ensuring a full spectrum of care for lasting recovery.</p><br />
            <h2>Start Your Recovery Today</h2>
            <p>At Freedom Recovery Center, we’re committed to helping individuals break free from the chains of drug addiction and rebuild their lives. If you or a loved one is struggling with addiction, our Inpatient Drug Rehab Program can provide the support and treatment necessary for a fresh start.</p>

          </div>
        <div className="inpatientRehab-program-image imageTwo-bg">
            <img src={heroinImage} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>


      </div>


      
    </div>
  );
};

export default InpatientRehabSection;
