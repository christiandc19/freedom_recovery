import React from 'react'
import './SideBarInsurance.css'
import Aetna from '../../assets/Aetna.webp';
import Antem from '../../assets/anthem.webp';
import Beacon from '../../assets/beacon.webp';
import Bluecross from '../../assets/bluecross.webp';
import Cigna from '../../assets/cigna.webp';
import Horizon from '../../assets/horizon.webp';

const SideBarInsurance = () => {
  return (
    <>
      <div className='sidebar-insurance'>
        <div className='sidebar-insurance-content'>
        <h1>WE WORK WITH MAJOR INSURANCE</h1>
        <p>At Freedom Recovery, we believe that quality healthcare should be accessible to all. That's why we're committed to working with a wide range of insurance providers to ensure our patients can receive the care they need without added financial stress. Explore our comprehensive list of accepted insurances above.</p>
        <div className='sidebar-insurance-flex'>
            <div className='sidebar-insurance-item'>
                <img src={Aetna} alt='Aetna' loading='lazy' />
            </div>
            <div className='sidebar-insurance-item'>
            <img src={Antem} alt='Antem' loading='lazy' />
            </div>
            <div className='sidebar-insurance-item'>
            <img src={Beacon} alt='Beacon' loading='lazy' />
            </div>
            <div className='sidebar-insurance-item'>
            <img src={Bluecross} alt='Bluecross' loading='lazy' />
            </div>
            <div className='sidebar-insurance-item'>
            <img src={Horizon} alt='Horizon' loading='lazy' />
            </div>
            <div className='sidebar-insurance-item'>
            <img src={Cigna} alt='Cigna' loading='lazy' />
            </div>
        </div>

        </div>
      </div>
    </>
  )
}

export default SideBarInsurance
