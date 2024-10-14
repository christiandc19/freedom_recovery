import React from 'react';
import './AddictionRehabSection.css';
import alcoholImage from '../../../assets/alcoholic_man.webp';  // Add relevant images
import heroinImage from '../../../assets/heroin_addiction.webp';

const AlcoholHeroinRehab = () => {
  return (
    <div className="rehab-container">
      <section className="intro-section">
        <h1>Alcohol and Heroin Addiction Rehab</h1>
        <p>
          At Antioch Rehab Center, we specialize in comprehensive treatment programs for <strong>Alcohol Addiction</strong> and <strong>Heroin Addiction</strong>. Our goal is to provide effective recovery paths tailored to meet individual needs, helping you overcome addiction and regain control of your life.
        </p>
      </section>



      <div className="rehab-program flex-reverse container">

        <div className="rehab-program-image alcohol-bg">
            <img src={alcoholImage} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>

        <div className="rehab-program-content">
          <h2>Alcohol Addiction Rehab Program</h2>
          <p>
            Struggling with <strong>alcohol addiction</strong> can be overwhelming, but recovery is possible. Our alcohol rehab program at Antioch Rehab Center provides a holistic approach, including medical detox, counseling, and ongoing support. We offer evidence-based therapies such as Cognitive Behavioral Therapy (CBT) and group counseling to address the root causes of addiction and promote long-term recovery.
          </p>
          <p>
            Whether you're dealing with long-term alcohol dependence or have recently experienced difficulties with alcohol abuse, our program is designed to help you break the cycle and rebuild your health and life. We use proven methods to manage withdrawal symptoms and minimize the risk of relapse.
          </p>
        </div>
      </div>


      <div className="rehab-program container">



        <div className="rehab-program-content">
            <h2>Heroin Addiction Rehab Program</h2>
            <p>
            <strong>Heroin addiction</strong> is a serious, life-threatening condition, but our specialized rehab program can help. At Antioch Rehab Center, we offer a structured treatment plan that includes medical detoxification, intensive therapy, and support systems to ensure a full recovery.
          </p>
          <p>
            Our heroin addiction rehab program focuses on addressing both the physical and psychological aspects of addiction. With individualized care, patients receive treatment that helps reduce cravings, manage withdrawal, and rebuild emotional well-being.
          </p>
          <p>
            We utilize a range of therapies, including Medication-Assisted Treatment (MAT), which can ease withdrawal symptoms and reduce the risk of relapse. Our compassionate team is committed to supporting patients every step of the way on their journey to recovery.
          </p>        </div>
        <div className="rehab-program-image heroin-bg">
            <img src={heroinImage} alt="Alcohol Addiction Rehab" className="responsive-img" />
        </div>


      </div>


      
    </div>
  );
};

export default AlcoholHeroinRehab;
