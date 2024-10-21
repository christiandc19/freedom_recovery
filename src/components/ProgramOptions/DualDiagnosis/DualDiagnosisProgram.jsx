import React from "react";
import './DualDiagnosisProgram.css'; // CSS for styling

const DualDiagnosisProgram = () => {
  return (
    <div className="dual-diagnosis-container">
      <h1>Dual Diagnosis Program at Freedom Recovery Center</h1>
      <p className="intro-text">
        The <strong>Dual Diagnosis Program</strong> at Freedom Recovery Center is designed to provide comprehensive care for individuals struggling with both <strong>mental health disorders</strong> and <strong>substance use disorders</strong>. Our team of experts is dedicated to helping patients achieve long-lasting recovery by addressing both conditions simultaneously, ensuring a holistic and integrated approach to treatment.
      </p>

      <section className="program-details">
        <h2>What is Dual Diagnosis?</h2>
        <p>
          Dual diagnosis, also known as <strong>co-occurring disorders</strong>, occurs when someone experiences both a <strong>mental health condition</strong> such as <strong>depression, anxiety, or PTSD</strong> and a substance use disorder, including <strong>alcohol or drug addiction</strong>. Treating both conditions together is crucial for successful, sustainable recovery.
        </p>
      </section>

      <section className="treatment-approach">
        <h2>Our Treatment Approach</h2>
        <p>
          At Freedom Recovery Center, we use a multidisciplinary approach to <strong>dual diagnosis treatment</strong>. Our programs integrate mental health care with addiction treatment to ensure patients receive the support they need on all fronts. Here’s what our dual diagnosis program includes:
        </p>

        <ul>
          <li><strong>Comprehensive Assessment:</strong> We begin with a thorough evaluation to assess both mental health and substance use issues, allowing us to create a customized treatment plan.</li>
          <li><strong>Individual Therapy:</strong> One-on-one sessions with licensed therapists specializing in <strong>cognitive behavioral therapy (CBT)</strong> and other evidence-based practices to address both addiction and mental health.</li>
          <li><strong>Group Therapy:</strong> Peer support and group counseling sessions to foster connection and shared healing experiences.</li>
          <li><strong>Medication Management:</strong> If needed, medication may be prescribed to manage symptoms of <strong>mental health disorders</strong> alongside substance withdrawal.</li>
          <li><strong>Holistic Therapies:</strong> We offer mindfulness, yoga, and stress reduction techniques to promote emotional and physical well-being.</li>
          <li><strong>Relapse Prevention Education:</strong> A focus on identifying triggers and creating strategies to prevent relapse for both mental health and substance use.</li>
        </ul>
      </section>

      <section className="who-benefits">
        <h2>Who Can Benefit from Our Dual Diagnosis Program?</h2>
        <p>
          Our <strong>dual diagnosis program</strong> is ideal for individuals who have:
        </p>
        <ul>
          <li>A history of <strong>mental health disorders</strong> combined with <strong>substance use</strong>.</li>
          <li>Experienced relapse due to untreated mental health issues.</li>
          <li>Tried substance abuse treatment before without addressing underlying <strong>psychological conditions</strong>.</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Freedom Recovery Center?</h2>
        <p>
          Freedom Recovery Center is committed to offering the highest quality care for individuals with <strong>co-occurring disorders</strong>. Our experienced team understands the complexities of <strong>dual diagnosis</strong> and provides compassionate, comprehensive treatment tailored to each individual's needs.
        </p>
        <p>
          We believe in treating the whole person, addressing both the mental and physical aspects of recovery. Our integrated approach increases the likelihood of long-term success and improved mental health.
        </p>
      </section>

      <section className="call-to-action">
        <h2>Start Your Recovery Today</h2>
        <p>
          If you or someone you love is struggling with both mental health and substance use disorders, don’t wait. Contact Freedom Recovery Center to learn more about our <strong>dual diagnosis treatment program</strong> and take the first step towards a healthier, addiction-free life.
        </p>
      </section>
    </div>
  );
};

export default DualDiagnosisProgram;
