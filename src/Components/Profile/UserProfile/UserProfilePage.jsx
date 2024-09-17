import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Tabs, Tab, Modal } from 'react-bootstrap';
import CoverImg from '../../../assets/images/unsplash_0aMMMUjiiEQ.svg';
import ProfilePic from '../../../assets/images/img& bg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const [key, setKey] = useState('healthRecords');
  const [showAddRecordModal, setShowAddRecordModal] = useState(false);
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);
  const [newRecordData, setNewRecordData] = useState({
    date: '',
    description: '',
    image: '',
  });
  const [healthRecords, setHealthRecords] = useState([]);

  const navigate = useNavigate();

  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    timeSlot: '',
  });

  useEffect(() => {
    const storedRecords = localStorage.getItem('healthRecords');
    if (storedRecords) {
      setHealthRecords(JSON.parse(storedRecords));
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('healthRecords', JSON.stringify(healthRecords));
    } catch (error) {
      console.error('Error saving health records to local storage:', error);
    }
  }, [healthRecords]);

  const handleAddRecord = () => {
    setShowAddRecordModal(true);
  };

  const handleCloseModal = () => {
    setShowAddRecordModal(false);
    setNewRecordData({
      date: '',
      description: '',
      image: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    let updatedData = { ...newRecordData };

    if (name === 'image') {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      updatedData = { ...updatedData, image: fileUrl };
    } else {
      updatedData = { ...updatedData, [name]: value };
    }

    setNewRecordData(updatedData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setHealthRecords([...healthRecords, newRecordData]);
    setNewRecordData({
      date: '',
      description: '',
      image: '',
    });

    setShowAddRecordModal(false);
  };

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

  const handleAppointmentSubmit = e => {
    e.preventDefault();
    navigate('/appointment');
    setShowBookAppointmentModal(false);
  };

  const [todayDate, setTodayDate] = useState('');
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setTodayDate(today);
  }, []);

  return (
    <div className='container profile-page'>
      <div className='header-section'>
        <div className='cover-image'>
          <img src={CoverImg} alt='Cover' className='cover-img' />
        </div>

        <div className='profile-pic'>
          <img src={ProfilePic} alt='Profile' className='profile-img' />
        </div>
      </div>

      <div className='profile-info'>
        <h2 className='profile-name'>Pankaj Gupta</h2>
        <div className='action-buttons'>
          <Button variant='primary' onClick={handleAddRecord}>
            Add Health Record
          </Button>
          <Button variant='primary' onClick={handleBookAppointment}>
            Book an Appointment
          </Button>
          <Button variant='danger'>Logout</Button>
        </div>
      </div>

      <div className='row body-section'>
        <div className='col-md-3 about-section'>
          <Card>
            <Card.Body>
              <Card.Title>About</Card.Title>
              <div className='about-info'>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faUser} className='icon' />
                  <p>Male</p>
                </div>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faCalendar} className='icon' />
                  <p>Born June 26, 1980</p>
                </div>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faLocationDot} className='icon' />
                  <p>Surat, Gujarat</p>
                </div>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faEnvelope} className='icon' />
                  <p>pankajgupta0695@gmail.com</p>
                </div>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faPhone} className='icon' />
                  <p>33757005467</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-9 toggle-section'>
          <Tabs activeKey={key} onSelect={k => setKey(k)} className='mb-3'>
            <Tab eventKey='healthRecords' title='Health Records'>
              <div className='health-records'>
                {healthRecords.map((record, index) => (
                  <Card key={index} className='mb-3'>
                    <Card.Body>
                      <Card.Title>{record.date}</Card.Title>
                      <img
                        src={record.image}
                        alt='Record'
                        className='record-img'
                      />
                      <p>{record.description}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Tab>

            <Tab eventKey='updates' title='Updates'>
              <div className='updates'>
                <div className='update-item'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Counselor'
                    className='update-img'
                  />
                  <div className='update-info'>
                    <h5>Shelby Goode</h5>
                    <p>Completed</p>
                  </div>
                  <span className='update-time'>1 min ago</span>
                </div>

                <div className='update-item'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Counselor'
                    className='update-img'
                  />
                  <div className='update-info'>
                    <h5>Shelby Goode</h5>
                    <p>Approved</p>
                  </div>
                  <span className='update-time'>9 min ago</span>
                </div>

                <div className='update-item'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Counselor'
                    className='update-img'
                  />
                  <div className='update-info'>
                    <h5>Shelby Goode</h5>
                    <p>Pending</p>
                  </div>
                  <span className='update-time'>15 min ago</span>
                </div>

                <div className='update-item'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Counselor'
                    className='update-img'
                  />
                  <div className='update-info'>
                    <h5>Adriene Watson</h5>
                    <p>Declined</p>
                  </div>
                  <span className='update-time'>21 min ago</span>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <Modal show={showAddRecordModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Health Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='date' className='form-label'>
                Date
              </label>
              <input
                type='date'
                className='form-control'
                id='date'
                name='date'
                value={newRecordData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='description' className='form-label'>
                Description
              </label>
              <textarea
                className='form-control'
                id='description'
                name='description'
                value={newRecordData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className='mb-3'>
              <label htmlFor='image' className='form-label'>
                Image
              </label>
              <input
                type='file'
                className='form-control'
                id='image'
                name='image'
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Add Record
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showBookAppointmentModal}
        onHide={handleCloseAppointmentModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAppointmentSubmit}>
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

            {/* Show time options based on selected time slot */}
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

export default UserProfilePage;
