import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';

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
  const [newRecordData, setNewRecordData] = useState({
    date: '',
    description: '',
    image: '',
  });
  const [healthRecords, setHealthRecords] = useState([]);

  const navigate = useNavigate();

  const { logout } = useContext(UserContext);

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

  const handleAppointmentBtn = e => {
    e.preventDefault();
    navigate('/appointment');
  };

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
          <Button variant='primary' onClick={handleAppointmentBtn}>
            Book an Appointment
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              logout();
              navigate('/');
            }}
          >
            Logout
          </Button>
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
    </div>
  );
};

export default UserProfilePage;
