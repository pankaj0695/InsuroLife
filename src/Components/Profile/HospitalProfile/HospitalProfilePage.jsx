import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';
import { capitalize } from '../../../helpers/helper';
import logo from '../../../assets/hospital-images/logo.png'

import hospitalCoverImg from '../../../assets/images/undoc.svg';
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
import './HospitalProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

function HospitalProfilePage() {
  const [key, setKey] = useState('insurances');
  const navigate = useNavigate();

  const { logout, user } = useContext(UserContext);

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
          <img src={user.data.image} alt='Profile' className='profile-img' />
        </div>
      </div>

      <div className='profile-info'>
        <h2 className='profile-name'>{capitalize(user.data.hospital_name)}</h2>
        <div className='buttons'>
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
                  <FontAwesomeIcon icon={faLocationDot} className='icon' />
                  <p>
                    {capitalize(user.data.city)}, {capitalize(user.data.state)}
                  </p>
                </div>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faEnvelope} className='icon' />
                  <p>{user.data.email}</p>
                </div>
                <div className='icon-text'>
                  <FontAwesomeIcon icon={faPhone} className='icon' />
                  <p>{user.data.contactNo}</p>
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
                    <img src={logo} alt='insurance-img' className='insurance-img' />
                    <Card.Title>Star Health Alliance</Card.Title>
                    <p className='keypoints'>
                      <span>Efficient</span>
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
