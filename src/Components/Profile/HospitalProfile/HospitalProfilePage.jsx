import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';
import { capitalize } from '../../../helpers/helper';

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
  const [requests, setRequests] = useState([]);
  const [acceptedInsurances, setAcceptedInsurances] = useState([]);
  const navigate = useNavigate();

  const { logout, user } = useContext(UserContext);

  const handleTabSelect = k => {
    setKey(k);
  };

  useEffect(() => {
    const fetchInsurances = async () => {
      const token = localStorage.getItem('auth-token');

      const response = await fetch('/customer/get-insurances', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': `${token}`,
        },
      });

      const resData = await response.json();
      // console.log(resData);
      setRequests(resData);
    };
    fetchInsurances();
  }, []);

  const handleRequestAction = async (insuranceId, status) => {
    const token = localStorage.getItem('auth-token');

    try {
      const response = await fetch('/notifications', {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': `${token}`,
        },
        body: JSON.stringify({
          request_id: insuranceId,
          status,
        }),
      });

      const resData = await response.json();
      if (response.status === 200) {
        if (status === 'Accepted') {
          setAcceptedInsurances(prev => [
            ...prev,
            resData.updatedRequest.insurance_id,
          ]);
        }

        setRequests(prev =>
          prev.filter(request => request._id !== resData.updatedRequest._id)
        );
      } else {
        console.log(resData.message);
      }
    } catch (error) {
      console.error(error.message);
    }
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
            {/* Insurances Tab */}
            <Tab eventKey='insurances' title='Insurances'>
              <div className='insurances'>
                {acceptedInsurances.length > 0 ? (
                  acceptedInsurances.map((insurance, index) => (
                    <Card key={index} className='mb-3'>
                      <Card.Body>
                        <Card.Title>{insurance.insurance_name}</Card.Title>
                        <p>Claim: {insurance.claim}</p>
                        <p>Premium: {insurance.premium}</p>
                        <p>Description: {insurance.description}</p>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p>No accepted insurances yet.</p>
                )}
              </div>
            </Tab>

            {/* Requests Tab */}
            <Tab eventKey='requests' title='Requests'>
              <div className='requests'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th style={{ display: 'flex', justifyContent: 'center' }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((insurance, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{insurance.insurance_name}</td>
                        <td>{insurance.status || 'Pending'}</td>
                        <td>
                          <div
                            className='action-btns'
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <Button
                              variant='primary'
                              size='sm'
                              onClick={() =>
                                handleRequestAction(insurance._id, 'Accepted')
                              }
                            >
                              Accept
                            </Button>
                            <Button
                              variant='danger'
                              size='sm'
                              onClick={() =>
                                handleRequestAction(insurance._id, 'Declined')
                              }
                            >
                              Decline
                            </Button>
                            <Button
                              variant='primary'
                              size='sm'
                              onClick={() => {
                                navigate(`/insurances/${insurance._id}`);
                              }}
                            >
                              View Details
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
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
