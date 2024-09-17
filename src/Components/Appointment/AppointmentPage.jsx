import { useState } from 'react';

import insurerIcon from '../../assets/icons/insurer.svg';
import downArrowIcon from '../../assets/icons/down-arrow.svg';
import callIcon from '../../assets/icons/call-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import tickIcon from '../../assets/icons/tick-icon.svg';

import bajajLogo from '../../assets/insurance-images/bajaj-logo.png';
import counsellorImage from '../../assets/cousellor-images/counsellor.png';

import './AppointmentPage.css';

// Sample counsellor data
const counsellorsData = [
  {
    name: 'Ravi Sharma',
    insurer_logo: bajajLogo,
    insurer: 'Bajaj Allianz',
    image: counsellorImage,
    tags: ['Health', 'Family'],
    email: 'ravi.sharma@bajajallianz.com',
    contactNo: '+91-9876543210',
  },
  {
    name: 'Priya Desai',
    insurer_logo: bajajLogo,
    insurer: 'Apollo India',
    image: counsellorImage,
    tags: ['Critical Illness', 'Individual'],
    email: 'priya.desai@apolloindia.com',
    contactNo: '+91-9123456780',
  },
  {
    name: 'Amit Verma',
    insurer_logo: bajajLogo,
    insurer: 'LIC',
    image: counsellorImage,
    tags: ['Health', 'Family'],
    email: 'amit.verma@lic.com',
    contactNo: '+91-9871234567',
  },
  {
    name: 'Sunita Gupta',
    insurer_logo: bajajLogo,
    insurer: 'Star Health',
    image: counsellorImage,
    tags: ['Critical Illness', 'Individual'],
    email: 'sunita.gupta@starhealth.com',
    contactNo: '+91-9823456789',
  },
  {
    name: 'Manoj Kumar',
    insurer_logo: bajajLogo,
    insurer: 'Bajaj Allianz',
    image: counsellorImage,
    tags: ['Health', 'Senior Citizens'],
    email: 'manoj.kumar@bajajallianz.com',
    contactNo: '+91-9987654321',
  },
  {
    name: 'Neha Bhatia',
    insurer_logo: bajajLogo,
    insurer: 'Apollo India',
    image: counsellorImage,
    tags: ['Health', 'Maternity'],
    email: 'neha.bhatia@apolloindia.com',
    contactNo: '+91-9823456712',
  },
  {
    name: 'Rajiv Mehra',
    insurer_logo: bajajLogo,
    insurer: 'LIC',
    image: counsellorImage,
    tags: ['Health', 'Critical Illness'],
    email: 'rajiv.mehra@lic.com',
    contactNo: '+91-9981234560',
  },
  {
    name: 'Pooja Sinha',
    insurer_logo: bajajLogo,
    insurer: 'Star Health',
    image: counsellorImage,
    tags: ['Family', 'Maternity'],
    email: 'pooja.sinha@starhealth.com',
    contactNo: '+91-9876123450',
  },
  {
    name: 'Ashok Patel',
    insurer_logo: bajajLogo,
    insurer: 'Bajaj Allianz',
    image: counsellorImage,
    tags: ['Health', 'Individual'],
    email: 'ashok.patel@bajajallianz.com',
    contactNo: '+91-9834567890',
  },
  {
    name: 'Meena Rao',
    insurer_logo: bajajLogo,
    insurer: 'Apollo India',
    image: counsellorImage,
    tags: ['Senior Citizens', 'Health'],
    email: 'meena.rao@apolloindia.com',
    contactNo: '+91-9945678123',
  },
  {
    name: 'Gaurav Singh',
    insurer_logo: bajajLogo,
    insurer: 'LIC',
    image: counsellorImage,
    tags: ['Health', 'Senior Citizens'],
    email: 'gaurav.singh@lic.com',
    contactNo: '+91-9841234567',
  },
  {
    name: 'Swati Joshi',
    insurer_logo: bajajLogo,
    insurer: 'Star Health',
    image: counsellorImage,
    tags: ['Maternity', 'Family'],
    email: 'swati.joshi@starhealth.com',
    contactNo: '+91-9712345678',
  },
  {
    name: 'Vikas Reddy',
    insurer_logo: bajajLogo,
    insurer: 'Bajaj Allianz',
    image: counsellorImage,
    tags: ['Critical Illness', 'Health'],
    email: 'vikas.reddy@bajajallianz.com',
    contactNo: '+91-9821123456',
  },
  {
    name: 'Anita Jain',
    insurer_logo: bajajLogo,
    insurer: 'Apollo India',
    image: counsellorImage,
    tags: ['Individual', 'Critical Illness'],
    email: 'anita.jain@apolloindia.com',
    contactNo: '+91-9932456789',
  },
  {
    name: 'Sameer Naik',
    insurer_logo: bajajLogo,
    insurer: 'LIC',
    image: counsellorImage,
    tags: ['Health', 'Maternity'],
    email: 'sameer.naik@lic.com',
    contactNo: '+91-9871123456',
  },
  {
    name: 'Sneha Kapoor',
    insurer_logo: bajajLogo,
    insurer: 'Star Health',
    image: counsellorImage,
    tags: ['Family', 'Health'],
    email: 'sneha.kapoor@starhealth.com',
    contactNo: '+91-9945123450',
  },
  {
    name: 'Arvind Malhotra',
    insurer_logo: bajajLogo,
    insurer: 'Bajaj Allianz',
    image: counsellorImage,
    tags: ['Senior Citizens', 'Critical Illness'],
    email: 'arvind.malhotra@bajajallianz.com',
    contactNo: '+91-9912345678',
  },
  {
    name: 'Kavita Iyer',
    insurer_logo: bajajLogo,
    insurer: 'Apollo India',
    image: counsellorImage,
    tags: ['Health', 'Maternity'],
    email: 'kavita.iyer@apolloindia.com',
    contactNo: '+91-9834123456',
  },
  {
    name: 'Rahul Thakur',
    insurer_logo: bajajLogo,
    insurer: 'LIC',
    image: counsellorImage,
    tags: ['Health', 'Family'],
    email: 'rahul.thakur@lic.com',
    contactNo: '+91-9845234567',
  },
  {
    name: 'Divya Menon',
    insurer_logo: bajajLogo,
    insurer: 'Star Health',
    image: counsellorImage,
    tags: ['Senior Citizens', 'Health'],
    email: 'divya.menon@starhealth.com',
    contactNo: '+91-9823456789',
  },
];

const AppointmentPage = () => {
  const [insurersFilter, setInsurersFilter] = useState([]);
  const [filteredData, setFilteredData] = useState(counsellorsData);

  const [isInsurerDropdownOpen, setIsInsurerDropdownOpen] = useState(false);

  const insurers = [
    ...new Set(counsellorsData.map(counsellor => counsellor.insurer)),
  ];

  // Handle insurer filter
  const handleInsurerChange = insurer => {
    const selectedInsurers = insurersFilter.includes(insurer)
      ? insurersFilter.filter(item => item !== insurer)
      : [...insurersFilter, insurer];
    setInsurersFilter(selectedInsurers);
  };

  const applyFilters = () => {
    setIsInsurerDropdownOpen(false);

    let data = counsellorsData;

    if (insurersFilter.length > 0) {
      data = data.filter(item => insurersFilter.includes(item.insurer));
    }

    setFilteredData(data);
  };

  return (
    <div className='appointment-page-container'>
      <div className='filters-container'>
        {/* Insurer Dropdown */}
        <div className='dropdown'>
          <button
            className='dropdown-btn'
            onClick={() => setIsInsurerDropdownOpen(!isInsurerDropdownOpen)}
          >
            <img src={insurerIcon} width={20} alt='insurer icon' />
            Insurer
            <img src={downArrowIcon} width={20} alt='down arrow' />
          </button>
          {isInsurerDropdownOpen && (
            <div className='dropdown-content'>
              {insurers.map(insurer => (
                <label key={insurer} className='checkbox-label'>
                  <input
                    type='checkbox'
                    value={insurer}
                    checked={insurersFilter.includes(insurer)}
                    onChange={() => handleInsurerChange(insurer)}
                  />
                  {insurer}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Apply Filters Button */}
        <button className='apply-filters-btn' onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      {/* counsellor Cards */}
      <div className='counsellor-cards-container'>
        {filteredData.map((counsellor, index) => (
          <div key={index} className='counsellor-card'>
            <img
              src={counsellor.insurer_logo}
              alt={counsellor.insurer}
              className='c-insurer-logo'
            />
            <img
              src={counsellor.image}
              alt={counsellor.name}
              className='counsellor-image'
            />
            <h3>{counsellor.name}</h3>
            <p>
              <img src={callIcon} alt='call icon' width={17} />
              {counsellor.contactNo}
            </p>
            <p>
              <img src={emailIcon} alt='email icon' width={19} />
              {counsellor.email}
            </p>
            <ul className='key-points'>
              {counsellor.tags.map((tag, idx) => (
                <li key={idx}>
                  <img src={tickIcon} alt='tict icon' width={16} /> {tag}
                </li>
              ))}
            </ul>
            <button className='view-details-btn'>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentPage;
