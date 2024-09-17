import React, { useState } from 'react';
import { Card, Button, Modal, Form, Tabs, Tab } from 'react-bootstrap';
import InsurerCoverImg from '../../../assets/images/insurercover.svg';
import InsurerProfilePic from '../../../assets/images/insurerpfp.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './InsurerProfilePage.css';

function InsurerProfilePage() {
  const [key, setKey] = useState('insurances');
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);
  const [showCounselorModal, setShowCounselorModal] = useState(false);
  const [insurances, setInsurances] = useState([]);
  const [counselors, setCounselors] = useState([]);

  const handleAddInsurance = e => {
    e.preventDefault();
    const newInsurance = {
      name: e.target.elements.insuranceName.value,
      insurer: e.target.elements.insurer.value,
      logo: URL.createObjectURL(e.target.elements.insurerLogo.files[0]),
      claim: e.target.elements.claim.value,
      premium: e.target.elements.premium.value,
      tags: [
        e.target.elements.tag1.value,
        e.target.elements.tag2.value,
        e.target.elements.tag3.value,
      ],
      description: e.target.elements.description.value,
    };
    setInsurances([...insurances, newInsurance]);
    setShowInsuranceModal(false);
  };

  const handleAddCounselor = e => {
    e.preventDefault();
    const newCounselor = {
      name: e.target.elements.counselorName.value,
      phone: e.target.elements.counselorPhone.value,
      email: e.target.elements.counselorEmail.value,
      logo: URL.createObjectURL(e.target.elements.counselorLogo.files[0]),
      tags: [
        e.target.elements.counselorTag1.value,
        e.target.elements.counselorTag2.value,
      ],
    };
    setCounselors([...counselors, newCounselor]);
    setShowCounselorModal(false);
  };

  return (
    <div className='container profile-page'>
      <div className='header-section'>
        <div className='cover-image'>
          <img src={InsurerCoverImg} alt='Cover' className='cover-img' />
        </div>

        <div className='profile-pic'>
          <img src={InsurerProfilePic} alt='Profile' className='profile-img' />
        </div>
      </div>

      <div className='profile-info'>
        <h2 className='profile-name'>Bajaj Allianz</h2>
        <div className='action-buttons'>
          <Button variant='primary' onClick={() => setShowInsuranceModal(true)}>
            Add New Insurance
          </Button>
          <Button variant='primary' onClick={() => setShowCounselorModal(true)}>
            Add Counselor
          </Button>
          <Button variant='danger'>Logout</Button>
        </div>
      </div>

      <div className='profile-body'>
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

      <Tabs activeKey={key} onSelect={k => setKey(k)} className='toggle-section'>
        <Tab eventKey='insurances' title='Insurances'>
          <div className='insurance-section'>
            {insurances.map((insurance, index) => (
              <Card key={index} className='insurance-card'>
                <Card.Img variant='top' src={insurance.logo} />
                <Card.Body>
                  <Card.Title>{insurance.name}</Card.Title>
                  <Card.Text>Insurer: {insurance.insurer}</Card.Text>
                  <Card.Text>Claim: {insurance.claim}</Card.Text>
                  <Card.Text>Premium: ₹{insurance.premium}/month</Card.Text>
                  <Card.Text>Tags: {insurance.tags.join(', ')}</Card.Text>
                  <Card.Text>{insurance.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Tab>

        <Tab eventKey='counselors' title='Counselors'>
          <div className='counselor-section'>
            {counselors.map((counselor, index) => (
              <Card key={index} className='counselor-card'>
                <Card.Img variant='top' src={counselor.logo} />
                <Card.Body>
                  <Card.Title>{counselor.name}</Card.Title>
                  <Card.Text>Phone: {counselor.phone}</Card.Text>
                  <Card.Text>Email: {counselor.email}</Card.Text>
                  <Card.Text>Tags: {counselor.tags.join(', ')}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Tab>
      </Tabs>
      </div>        

      <Modal
        show={showInsuranceModal}
        onHide={() => setShowInsuranceModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Insurance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddInsurance}>
            <Form.Group>
              <Form.Label>Insurance Name</Form.Label>
              <Form.Control type='text' name='insuranceName' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Insurer</Form.Label>
              <Form.Control type='text' name='insurer' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Insurer Logo</Form.Label>
              <Form.Control type='file' name='insurerLogo' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Claim</Form.Label>
              <Form.Control type='number' name='claim' step="50000" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Premium (per month)</Form.Label>
              <Form.Control type='number' name='premium' step="100" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tag 1</Form.Label>
              <Form.Control type='text' name='tag1' required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tag 2</Form.Label>
              <Form.Control type='text' name='tag2' required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tag 3</Form.Label>
              <Form.Control type='text' name='tag3' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' name='description' required />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showCounselorModal}
        onHide={() => setShowCounselorModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Counselor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCounselor}>
            <Form.Group>
              <Form.Label>Counselor Name</Form.Label>
              <Form.Control type='text' name='counselorName' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='tel' name='counselorPhone' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control type='email' name='counselorEmail' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Councelor Photo</Form.Label>
              <Form.Control type='file' name='councelorLogo' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tag 1</Form.Label>
              <Form.Control type='text' name='counselorTag1' required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tag 2</Form.Label>
              <Form.Control type='text' name='counselorTag2' required />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InsurerProfilePage;
