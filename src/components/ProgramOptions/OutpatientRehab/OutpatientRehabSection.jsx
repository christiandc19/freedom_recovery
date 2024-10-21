import React from 'react';
import './OutpatientRehabSection.css';
import OutpatientOne from '../../../assets/psychologist-with-notebook-and-patient.webp';  // Add relevant images
import OutpatientTwo from '../../../assets/group-therapy.webp';

const OutpatientRehabSection = () => {
  return (
    <div className="outpatientRehab-container">
      <section className="intro-section">
        <h1>Outpatient Drug Rehab Program
        </h1>
        <p>
        At Freedom Recovery Center, our Outpatient Drug Rehab Program offers a comprehensive, flexible treatment approach for individuals seeking recovery from drug addiction while maintaining their everyday responsibilities. This program is designed to provide intensive support, therapy, and education without the need for full-time residential care.
        </p>
      </section>



      <div className="outpatientRehab-program flex-reverse container">

        <div className="outpatientRehab-program-image OutpatientOne-bg">
            <img src={OutpatientOne} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>

        <div className="outpatientRehab-program-content">
          <h2>What is Outpatient Drug Rehab?</h2>
          <p>Outpatient drug rehab is a treatment option that allows individuals to live at home and continue their daily activities, such as work or school, while receiving structured addiction treatment. This program typically involves scheduled therapy sessions, group counseling, and educational workshops, all aimed at helping participants build the skills and coping mechanisms needed to maintain long-term sobriety. Key Benefits of Outpatient Drug Rehab:</p>
          <p>
            <ul>
            <li>Flexible Scheduling: Outpatient care is generally more affordable than inpatient or residential programs since there are no housing or full-time care costs.</li><br />
            <li>Cost-Effective: Outpatient care is generally more affordable than inpatient or residential programs since there are no housing or full-time care costs.</li><br />
            <li>Continued Support: Participants receive the same high-quality care, access to experienced therapists, and supportive peer groups as they would in a residential program.</li><br />
            <li>Real-Life Application: With outpatient care, individuals can immediately practice the skills they learn in treatment in real-world settings, helping reinforce recovery strategies.</li>
            </ul>
          </p>
        </div>
      </div>


      <div className="outpatientRehab-program container">



        <div className="outpatientRehab-program-content">
            <p>Treatment Components Our outpatient program consists of several key elements tailored to each individual’s needs:</p>
            <p>1. Individual Therapy: <br />One-on-one sessions with licensed therapists to explore the root causes of addiction, identify triggers, and develop personalized coping strategies.</p>
            <p>2. Group Therapy: <br />Engaging in group discussions with others who are also on the journey to recovery, providing a sense of community and mutual support.
            </p>
            <p>3. Cognitive Behavioral Therapy (CBT): <br />Focused on identifying and changing negative thought patterns and behaviors that contribute to addiction.</p>
            <p>4. Family Therapy:  <br />We address both addiction and mental health, ensuring a full spectrum of care for lasting recovery.</p>
            <p>5. Relapse Prevention Education:  <br />Involving family members in the healing process can improve communication and create a supportive environment for recovery.</p>
            <p>6. Holistic Approaches:  <br />Incorporating practices such as meditation, yoga, and mindfulness to support mental and emotional well-being during recovery.</p>
            <h2>Why Choose Freedom Recovery Center?</h2>
            <p>At Freedom Recovery Center, we believe that everyone’s journey to recovery is unique. Our outpatient program is designed to meet individuals where they are in their recovery, offering personalized care and a supportive environment. Our dedicated team of experienced professionals is committed to helping individuals achieve lasting sobriety and rebuild their lives.</p>

          </div>
        <div className="outpatientRehab-program-image OutpatientTwo-bg">
            <img src={OutpatientTwo} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>


      </div>


      
    </div>
  );
};

export default OutpatientRehabSection;
