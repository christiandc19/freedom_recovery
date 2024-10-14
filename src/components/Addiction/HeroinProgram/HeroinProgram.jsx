import React from 'react';
import './HeroinProgram.css';


const HeroinProgram = () => {
  return (
    <div className="treatment-container ">
      <div className='treatment-intro'>
      <h1>Heroin Treatment Program</h1>
      <p>
        Drug addiction is a complex disease that affects the brain and behavior. Treatment typically involves a combination of therapies, medications, and lifestyle changes. There are many resources available to help those struggling with addiction.
      </p>
      </div>


      <div className="treatment-sections container">

{/* Understanding Addiction */}

        <div className="HeroinProgramSection">
            <div className='HeroinProgramSectionCaption'>
                <h2>Understanding Heroin Addiction</h2>
                <p>
                Heroin addiction is a devastating and complex disease that affects both the mind and body. At Antioch Rehab, we understand the toll this powerful substance can take on individuals and their families. Heroin, an opioid derived from morphine, binds to receptors in the brain, creating intense euphoria. However, it quickly leads to physical dependence, with severe withdrawal symptoms and dangerous health risks.
                </p>
                <h2>Signs of Heroin Addiction:</h2>
                <p>
                  <ul>
                    <li>Intense cravings</li>
                    <li>Withdrawal from social activities</li>
                    <li>Weight loss and poor hygiene</li>
                    <li>Drowsiness or "nodding off"</li>
                    <li>Track marks from injections</li>
                  </ul>
                </p>
                <p>Treatment Options at Antioch Rehab: Our comprehensive heroin addiction treatment program is designed to support individuals through every step of recovery. We offer medically supervised detox to safely manage withdrawal symptoms, reducing the discomfort associated with quitting heroin. Our therapeutic approach combines evidence-based practices, such as cognitive behavioral therapy (CBT), group counseling, and individualized treatment plans, to address the root causes of addiction and promote lasting recovery.</p>
                <p>Medication-Assisted Treatment (MAT): To support long-term recovery, Antioch Rehab also offers Medication-Assisted Treatment (MAT), utilizing medications like methadone, buprenorphine, and naltrexone to reduce cravings and prevent relapse. MAT is integrated with counseling and behavioral therapies, ensuring a balanced and effective treatment approach.</p>
          </div>

          <div className='HeroinProgramSectionImage'>
          </div>
        </div>

{/* Treatment Options */}


<div className="HeroinProgramSection">

            <div className='HeroinProgramSectionCaption'>
                <h2>Side Effects of Heroin Use: Heroin use has severe and sometimes irreversible consequences, including:</h2>
                <p>
                  <ul>
                    <li>Respiratory issues and risk of overdose</li>
                    <li>Collapsed veins and infections from injection use</li>
                    <li>Heart complications and increased risk of infectious diseases like HIV or hepatitis</li>
                    <li>Cognitive decline and memory loss</li>
                    <li>Severe gastrointestinal problems</li>
                  </ul>
                </p>
                <p>A Path to Recovery Recovery from heroin addiction is possible, and Antioch Rehab is here to guide you through the process. Our compassionate team provides a safe, supportive environment where healing can begin. With the right tools, support, and treatment, a drug-free life is within reach.</p>
                <h2>Support Systems</h2>
                <p>Family, friends, and support groups play an important role in the recovery process. Having a strong support system can help individuals stay motivated and avoid relapse.</p>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroinProgram;
