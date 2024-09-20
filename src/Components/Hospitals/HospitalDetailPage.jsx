import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import bajajLogo from '../../assets/insurance-images/bajaj-logo.png';
import hospitalImage from '../../assets/hospital-images/hospital-image.jpg';
import starIcon from '../../assets/icons/star-fill-icon.svg';
import './HospitalDetailPage.css';

// Sample hospital data
const hospitalsData = [
  {
    id: 'hospital-1',
    hospital_name: 'City Hospital',
    image: hospitalImage,
    contactNo: '9332244551',
    city: 'Mumbai',
    state: 'Maharashtra',
    email: 'cityhospital@gmail.com',
    ratingCount: 251,
    avgRating: 4,
  },
  {
    id: 'hospital-2',
    hospital_name: 'Sunrise Hospital',
    image: hospitalImage,
    contactNo: '9322233344',
    city: 'Pune',
    state: 'Maharashtra',
    email: 'sunrisehospital@gmail.com',
    ratingCount: 312,
    avgRating: 4.2,
  },
  {
    id: 'hospital-3',
    hospital_name: 'Lotus Hospital',
    image: hospitalImage,
    contactNo: '9334455667',
    city: 'Nagpur',
    state: 'Maharashtra',
    email: 'lotushospital@gmail.com',
    ratingCount: 128,
    avgRating: 3.9,
  },
  {
    id: 'hospital-4',
    hospital_name: 'Apex Hospital',
    image: hospitalImage,
    contactNo: '9334452341',
    city: 'Nashik',
    state: 'Maharashtra',
    email: 'apexhospital@gmail.com',
    ratingCount: 198,
    avgRating: 4.1,
  },
  {
    id: 'hospital-5',
    hospital_name: 'HealthCare Clinic',
    image: hospitalImage,
    contactNo: '9332233115',
    city: 'Thane',
    state: 'Maharashtra',
    email: 'healthcareclinic@gmail.com',
    ratingCount: 245,
    avgRating: 4.5,
  },
  {
    id: 'hospital-6',
    hospital_name: 'Global Hospital',
    image: hospitalImage,
    contactNo: '9335566778',
    city: 'Ahmedabad',
    state: 'Gujarat',
    email: 'globalhospital@gmail.com',
    ratingCount: 389,
    avgRating: 4.3,
  },
  {
    id: 'hospital-7',
    hospital_name: 'Sterling Hospital',
    image: hospitalImage,
    contactNo: '9335564533',
    city: 'Surat',
    state: 'Gujarat',
    email: 'sterlinghospital@gmail.com',
    ratingCount: 278,
    avgRating: 4.1,
  },
  {
    id: 'hospital-8',
    hospital_name: 'Care Hospital',
    image: hospitalImage,
    contactNo: '9336778899',
    city: 'Vadodara',
    state: 'Gujarat',
    email: 'carehospital@gmail.com',
    ratingCount: 356,
    avgRating: 4.4,
  },
  {
    id: 'hospital-9',
    hospital_name: 'Shalby Hospital',
    image: hospitalImage,
    contactNo: '9334455667',
    city: 'Rajkot',
    state: 'Gujarat',
    email: 'shalbyhospital@gmail.com',
    ratingCount: 192,
    avgRating: 3.8,
  },
  {
    id: 'hospital-10',
    hospital_name: 'Unity Hospital',
    image: hospitalImage,
    contactNo: '9332244112',
    city: 'Gandhinagar',
    state: 'Gujarat',
    email: 'unityhospital@gmail.com',
    ratingCount: 276,
    avgRating: 4.2,
  },
  {
    id: 'hospital-11',
    hospital_name: 'Apollo Hospital',
    image: hospitalImage,
    contactNo: '9331122334',
    city: 'Bengaluru',
    state: 'Karnataka',
    email: 'apollohospital@gmail.com',
    ratingCount: 501,
    avgRating: 4.7,
  },
  {
    id: 'hospital-12',
    hospital_name: 'Fortis Hospital',
    image: hospitalImage,
    contactNo: '9332234455',
    city: 'Mysuru',
    state: 'Karnataka',
    email: 'fortishospital@gmail.com',
    ratingCount: 392,
    avgRating: 4.4,
  },
  {
    id: 'hospital-13',
    hospital_name: 'Manipal Hospital',
    image: hospitalImage,
    contactNo: '9335566788',
    city: 'Hubli',
    state: 'Karnataka',
    email: 'manipalhospital@gmail.com',
    ratingCount: 288,
    avgRating: 4.2,
  },
  {
    id: 'hospital-14',
    hospital_name: 'Sparsh Hospital',
    image: hospitalImage,
    contactNo: '9334456789',
    city: 'Mangaluru',
    state: 'Karnataka',
    email: 'sparshhospital@gmail.com',
    ratingCount: 176,
    avgRating: 4.1,
  },
  {
    id: 'hospital-15',
    hospital_name: 'Vikram Hospital',
    image: hospitalImage,
    contactNo: '9336788990',
    city: 'Belagavi',
    state: 'Karnataka',
    email: 'vikramhospital@gmail.com',
    ratingCount: 221,
    avgRating: 4,
  },
  {
    id: 'hospital-16',
    hospital_name: 'Max Healthcare',
    image: hospitalImage,
    contactNo: '9333344556',
    city: 'Delhi',
    state: 'Delhi',
    email: 'maxhealthcare@gmail.com',
    ratingCount: 625,
    avgRating: 4.6,
  },
  {
    id: 'hospital-17',
    hospital_name: 'BLK Hospital',
    image: hospitalImage,
    contactNo: '9335566777',
    city: 'New Delhi',
    state: 'Delhi',
    email: 'blkhospital@gmail.com',
    ratingCount: 450,
    avgRating: 4.5,
  },
  {
    id: 'hospital-18',
    hospital_name: 'Metro Hospital',
    image: hospitalImage,
    contactNo: '9336677889',
    city: 'Dwarka',
    state: 'Delhi',
    email: 'metrohospital@gmail.com',
    ratingCount: 348,
    avgRating: 4.3,
  },
  {
    id: 'hospital-19',
    hospital_name: 'Primus Hospital',
    image: hospitalImage,
    contactNo: '9335569876',
    city: 'Noida',
    state: 'Delhi',
    email: 'primushospital@gmail.com',
    ratingCount: 297,
    avgRating: 4.1,
  },
  {
    id: 'hospital-20',
    hospital_name: 'Delhi Heart Institute',
    image: hospitalImage,
    contactNo: '9335564444',
    city: 'Gurgaon',
    state: 'Delhi',
    email: 'delhiheart@gmail.com',
    ratingCount: 378,
    avgRating: 4.4,
  },
];

const insurances = [
  {
    insuranceName: 'Health Shield Plan',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
  },
  {
    insuranceName: 'Star Plan',
    insurerLogo: bajajLogo, // Placeholder image for insurer logo
  },
];

const HospitalDetailPage = () => {
  const { hospital_id } = useParams(); // Extract hospital_id from URL
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchedhospital = hospitalsData.find(item => item.id === hospital_id);
    if (fetchedhospital) {
      setHospital(fetchedhospital);
    }
  }, [hospital_id]);

  if (!hospital) {
    return <div>Loading...</div>;
  }

  return (
    <div className='hospital-detail-page'>
      <div className='d-hospital-info'>
        <img
          src={hospital.image}
          alt={hospital.hospital_name}
          className='h-hospital-image'
        />
        <h2>{hospital.hospital_name}</h2>
        <p className='d-point'>
          City: <span>{hospital.city}</span>
        </p>
        <p className='d-point'>
          State: <span>{hospital.state}</span>
        </p>

        <p className='star-rating d-point'>
          Rating: {hospital.avgRating}
          <img src={starIcon} alt='star icon' width={16} />
        </p>
        <p className='d-point'>
          Contact No: <span>{hospital.contactNo}</span>
        </p>
        <p className='d-point'>
          Email Id: <span>{hospital.email}</span>
        </p>
      </div>

      <div className='d-insurance-list'>
        <h3 className='ctr'>Insurances that can be use in our Hospital</h3>
        <div className='d-insurance-cards-container'>
          {insurances.map((insurance, index) => (
            <div key={index} className='d-insurance-card'>
              <img
                src={insurance.insurerLogo}
                alt={insurance.insuranceName}
                className='d-insurance-image'
              />
              <h4 className='d-insurance-name'>{insurance.insuranceName}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailPage;
