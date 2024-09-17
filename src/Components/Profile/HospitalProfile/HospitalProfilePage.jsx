import React, { useState } from 'react';
import hospitalCoverImg from '../../../assets/images/undoc.svg';
import ProfilePic from '../../../assets/images/hosppfp.jpg';
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
import './HospitalProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

function HospitalProfilePage() {
  const [key, setKey] = useState('insurances');

  const handleTabSelect = k => {
    setKey(k);
  };

  return (
    <div className='container profile-page'>
      <div className='header-section'>
        <div className='cover-image'>
          <img src={hospitalCoverImg} alt='Cover' className='cover-img' />
        </div>

        <div className='profile-pic'>
          <img src={ProfilePic} alt='Profile' className='profile-img' />
        </div>
      </div>

      <div className='profile-info'>
        <h2 className='profile-name'>City Hospital</h2>
        <div className='buttons'>
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
          <Tabs activeKey={key} onSelect={handleTabSelect} className='mb-3'>
            <Tab eventKey='insurances' title='Insurances'>
              <div className='insurances'>
                <Card className='mb-3'>
                  <Card.Body>
                    <img src='' alt='insurance-img' className='insurance-img' />
                    <Card.Title>Star Health Alliance</Card.Title>
                    <p className='keypoints'>
                      <span> hello</span>
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Tab>
            <Tab eventKey='requests' title='Requests'>
              <div className='requests'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Appointment request</td>
                      <td>Pending</td>
                      <td>
                        <div className='action-btns'>
                          <Button variant='primary' size='sm'>
                            Accept
                          </Button>
                          <Button variant='danger' size='sm'>
                            Decline
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default HospitalProfilePage;
