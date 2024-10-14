import React from 'react';
import './About.css'; // Import the CSS file
import AboutUs from '../../assets/about-us-home.webp'

const About = () => {
  return (
    <section className="about-container" name="toAboutMe">
      <div className="about-image">
        <img src={AboutUs} alt="Chris" />
      </div>

      <div className="about-content">
        <h2>About Freedom Recovery</h2>
        <p>
        At Freedom Recovery, we believe in the power of healing, transformation, and support. Established with the vision of providing comprehensive care for individuals battling addiction and mental health challenges, we offer a safe haven where recovery is not only possible but sustainable. Our team of compassionate professionals is dedicated to creating personalized treatment plans tailored to meet the unique needs of each individual.
        </p>
        <p>
        We recognize that addiction is a multifaceted issue that affects every aspect of life, and that’s why our approach integrates medical, psychological, and holistic therapies. At Freedom Recovery, we aim to not only address the immediate challenges of substance abuse but also foster long-term well-being and personal growth.
        </p>
        <p>Our state-of-the-art facilities and experienced staff provide a supportive and nurturing environment for recovery. We offer a range of services, including detox, inpatient and outpatient care, dual diagnosis treatment, and relapse prevention. Every step of your journey is backed by our commitment to your health and recovery.</p>
        <p>At Freedom Recovery, you are never alone. We walk alongside you through the toughest battles, empowering you to reclaim your life, rediscover hope, and embrace freedom.
</p>

      </div>
    </section>
  );
};

export default About;
