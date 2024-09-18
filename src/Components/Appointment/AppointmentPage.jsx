import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

import insurerIcon from '../../assets/icons/insurer.svg';
import downArrowIcon from '../../assets/icons/down-arrow.svg';
import callIcon from '../../assets/icons/call-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import tickIcon from '../../assets/icons/tick-icon.svg';

import bajajLogo from '../../assets/insurance-images/bajaj-logo.png';
import counsellorImage from '../../assets/cousellor-images/counsellor.png';

import './AppointmentPage.css';

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
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);
  const [insurersFilter, setInsurersFilter] = useState([]);
  const [filteredData, setFilteredData] = useState(counsellorsData);
  const [todayDate, setTodayDate] = useState('');

  const [isInsurerDropdownOpen, setIsInsurerDropdownOpen] = useState(false);

  const insurers = [
    ...new Set(counsellorsData.map(counsellor => counsellor.insurer)),
  ];

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setTodayDate(today);
  }, []);

  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    timeSlot: '',
  });
  const handleBookAppointment = () => {
    setShowBookAppointmentModal(true);
  };

  const handleCloseAppointmentModal = () => {
    setShowBookAppointmentModal(false);
    setAppointmentData({ date: '', time: '', timeSlot: '' });
  };

  const handleAppointmentChange = e => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleTimeSlotChange = e => {
    const selectedSlot = e.target.value;
    setAppointmentData({
      ...appointmentData,
      timeSlot: selectedSlot,
      time: '',
    });
  };

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

        <button className='apply-filters-btn' onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
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
            <button
              className='view-details-btn'
              onClick={handleBookAppointment}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      <Modal
        show={showBookAppointmentModal}
        onHide={handleCloseAppointmentModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='mb-3'>
              <label htmlFor='date' className='form-label'>
                Date
              </label>
              <input
                type='date'
                className='form-control'
                id='date'
                name='date'
                value={appointmentData.date}
                onChange={handleAppointmentChange}
                min={todayDate}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='timeSlot' className='form-label'>
                Time Slot
              </label>
              <select
                className='form-control'
                id='timeSlot'
                name='timeSlot'
                value={appointmentData.timeSlot}
                onChange={handleTimeSlotChange}
                required
              >
                <option value=''>Select Time Slot</option>
                <option value='morning'>Morning</option>
                <option value='evening'>Evening</option>
                <option value='night'>Night</option>
              </select>
            </div>

            {appointmentData.timeSlot && (
              <div className='mb-3'>
                <label htmlFor='time' className='form-label'>
                  Available Time
                </label>
                <select
                  className='form-control'
                  id='time'
                  name='time'
                  value={appointmentData.time}
                  onChange={handleAppointmentChange}
                  required
                >
                  <option value=''>Select Time</option>
                  {appointmentData.timeSlot === 'morning' && (
                    <>
                      <option value='8:00 AM'>8:00 AM</option>
                      <option value='9:00 AM'>9:00 AM</option>
                      <option value='10:00 AM'>10:00 AM</option>
                      <option value='11:00 AM'>11:00 AM</option>
                    </>
                  )}
                  {appointmentData.timeSlot === 'evening' && (
                    <>
                      <option value='4:00 PM'>4:00 PM</option>
                      <option value='5:00 PM'>5:00 PM</option>
                      <option value='6:00 PM'>6:00 PM</option>
                      <option value='7:00 PM'>7:00 PM</option>
                    </>
                  )}
                  {appointmentData.timeSlot === 'night' && (
                    <>
                      <option value='8:00 PM'>8:00 PM</option>
                      <option value='9:00 PM'>9:00 PM</option>
                      <option value='10:00 PM'>10:00 PM</option>
                    </>
                  )}
                </select>
              </div>
            )}

            <Button type='submit' className='btn btn-primary'>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AppointmentPage;
