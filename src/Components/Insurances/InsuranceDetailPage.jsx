import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import bajajLogo from '../../assets/insurance-images/bajaj-logo.png';
import hospitalImage from '../../assets/hospital-images/hospital-image.jpg';
import './InsuranceDetailPage.css';

// Sample insurance data
const insuranceData = [
  {
    id: 'insurance-1',
    insuranceName: 'Health Shield Plan',
    insurer: 'Apollo India',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-2',
    insuranceName: 'Health Shield Plan',
    insurer: 'Apollo India',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-3',
    insuranceName: 'Health Shield Plan',
    insurer: 'Apollo India',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-4',
    insuranceName: 'Health Shield Plan',
    insurer: 'Apollo India',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-5',
    insuranceName: 'Health Shield Plan',
    insurer: 'Apollo India',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-6',
    insuranceName: 'Health Shield Plan',
    insurer: 'LIC',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-7',
    insuranceName: 'Health Shield Plan',
    insurer: 'Star Health',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  {
    id: 'insurance-8',
    insuranceName: 'Health Shield Plan',
    insurer: 'Bajaj Allianz',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
    claim: 500000,
    premium: 800,
    keyPoints: [
      'Covers hospitalization and outpatient treatments',
      'Cashless facility at 4500+ network hospitals',
      'Includes maternity cover after 3 years',
    ],
    details:
      'The Health Shield Plan by Apollo India is designed to cover both hospitalization and outpatient treatments...',
  },
  // Add more insurances similarly
];

const hospitals = [
  {
    hospital_name: 'City Hospital',
    image: hospitalImage,
  },
  {
    hospital_name: 'Global Hospital',
    image: hospitalImage,
  },
];

const InsuranceDetailPage = () => {
  const { insurance_id } = useParams(); // Extract insurance_id from URL
  const [insurance, setInsurance] = useState(null);

  useEffect(() => {
    const fetchedInsurance = insuranceData.find(
      item => item.id === insurance_id
    );
    if (fetchedInsurance) {
      setInsurance(fetchedInsurance);
    }
  }, [insurance_id]);

  if (!insurance) {
    return <div>Loading...</div>;
  }

  return (
    <div className='insurance-detail-page'>
      <div className='d-insurance-info'>
        <img
          src={insurance.insurerLogo}
          alt={insurance.insurer}
          className='d-insurer-logo'
        />
        <h2>{insurance.insuranceName}</h2>
        <p className='d-point'>
          Insurer: <span>{insurance.insurer}</span>
        </p>
        <p className='d-point'>
          Claim: <span>₹{insurance.claim}</span>
        </p>
        <p className='d-point'>
          Premium: <span>₹{insurance.premium}/month</span>
        </p>
        <ul className='d-key-points'>
          {insurance.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className='d-insurance-details'>{insurance.details}</p>
      </div>

      <div className='d-hospital-list'>
        <h3 className='ctr'>Hospitals Where This Insurance Can Be Used</h3>
        <div className='d-hospital-cards-container'>
          {hospitals.map((hospital, index) => (
            <div key={index} className='d-hospital-card'>
              <img
                src={hospital.image}
                alt={hospital.hospital_name}
                className='d-hospital-image'
              />
              <h4 className='d-hospital-name'>{hospital.hospital_name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetailPage;
