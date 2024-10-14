import React from 'react';
import './MATProgram.css'; // Assuming you have a CSS file for styling

const MATProgram = () => {
  return (
    <div className="mat-container">
      <section className="mat-intro">
        <h1>Medication-Assisted Treatment (MAT) for Addiction Recovery</h1>
        <p>
          At Antioch Rehab Center, our Medication-Assisted Treatment (MAT) program combines FDA-approved medications with counseling and behavioral therapies to provide a comprehensive approach to substance use disorder recovery. MAT is a proven method for managing opioid and alcohol dependence, helping individuals achieve long-term sobriety.
        </p>
      </section>

      <section className="mat-content">
        <h2>What is Medication-Assisted Treatment?</h2>
        <p>
          Medication-Assisted Treatment is an evidence-based approach that uses medications such as methadone, buprenorphine, and naltrexone to reduce cravings and withdrawal symptoms. These medications help normalize brain chemistry, block the euphoric effects of substances, and enable individuals to focus on their recovery.
        </p>
      </section>

      <section className="mat-benefits">
        <h2>Benefits of Medication-Assisted Treatment</h2>
        <ul>
          <li>Reduces withdrawal symptoms and cravings, making recovery more manageable.</li>
          <li>Improves retention in treatment programs, leading to better long-term outcomes.</li>
          <li>Lowers the risk of relapse and overdose, especially for opioid and alcohol dependence.</li>
          <li>Provides a holistic approach by combining medication with counseling and behavioral therapies.</li>
        </ul>
      </section>

      <section className="mat-therapy">
        <h2>Combining Medication with Therapy</h2>
        <p>
          MAT is most effective when paired with counseling and behavioral therapies. At Antioch Rehab Center, we offer individualized therapy sessions, group therapy, and cognitive-behavioral therapy (CBT) to address the psychological and behavioral aspects of addiction. This comprehensive approach helps individuals build healthy coping mechanisms and long-term recovery strategies.
        </p>
      </section>

      <section className="mat-who-is-it-for">
        <h2>Who is MAT For?</h2>
        <p>
          Medication-Assisted Treatment is most commonly used to treat opioid use disorder (OUD) and alcohol use disorder (AUD). It is particularly beneficial for individuals who:
        </p>
        <ul>
          <li>Have experienced repeated relapses with traditional treatment approaches.</li>
          <li>Need additional support to manage severe cravings and withdrawal symptoms.</li>
          <li>Are committed to long-term recovery and seeking a comprehensive treatment plan.</li>
        </ul>
      </section>

      <section className="mat-cta">
        <h2>Start Your Recovery with MAT</h2>
        <p>
          At Antioch Rehab Center, our dedicated team of medical professionals is here to guide you through every step of the Medication-Assisted Treatment process. If you or a loved one is struggling with addiction, contact us today to learn more about how MAT can help you achieve lasting recovery.
        </p>
      </section>
    </div>
  );
};

export default MATProgram;
