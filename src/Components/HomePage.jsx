import React from 'react';
import MainLogo from '../Logos/insurolife-logo 2.svg';
import FooterLogo from '../Logos/healthcare 1.svg';
import illustration from '../Logos/illustration.svg';
import FrameInsurance from '../Logos/Frame.svg';
import FrameConsultation from '../Logos/Frame-Consultation.svg';
import FrameDetailsInfo from '../Logos/Frame-DetailsInfo.svg';
import FrameHealthRecords from '../Logos/Frame-HealthRecords.svg';
import secTwoIllustration from '../Logos/trafalgar-illustration sec02 1.svg';
import secThreeIllustration from '../Logos/trafalgar-illustration sec03 1.svg';
import '../Components/HomePage.css';

const HomePage = () => {
  return (
    <div className='hero-page'>
      <header className='header bg-light py-3'>
        <div className='container d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src={MainLogo}
              alt='Logo'
              className='logo-img img-fluid'
              style={{ maxWidth: '150px' }}
            />
            <div className='ml-3 cursor-pointer'>
              <h1 className='font-weight-bold mb-0 mx-2'>Insurolife</h1>
            </div>
          </div>
          <nav>
            <ul className='nav'>
              <li className='nav-item'>
                <a href='#home' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='#insurance' className='nav-link'>
                  Insurances
                </a>
              </li>
              <li className='nav-item'>
                <a href='#appointment' className='nav-link'>
                  Appointment
                </a>
              </li>
              <li className='nav-item'>
                <button className='btn btn-primary'>Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className='hero-section py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 text-center text-md-left'>
              <h1 className='display-4 font-weight-bold'>
                Where Insurance Meets Transparency
              </h1>
              <p className='lead gray'>
                Insurolife simplifies your healthcare journey by providing
                transparent access to insurance policies and hospital networks.
                Discover the best insurance for you, and book appointments with
                ease, all in one place.
              </p>
              <button className='btn btn-primary btn-lg'>Get Started</button>
            </div>
            <div className='col-md-6 text-center'>
              <img
                src={illustration}
                alt='Hero'
                className='img-fluid'
                width='500'
                height='300'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='services-section py-5 bg-light'>
        <div className='container text-center'>
          <h2 className='mb-5'>Our Services</h2>
          <div className='text-center mb-4'>
            <div className='d-inline-block position-relative'>
              <div className='position-relative'>
                <div
                  className='bg-primary'
                  style={{ height: '2px', width: '100px', margin: '0 auto' }}
                ></div>
              </div>
            </div>
          </div>
          <p className='lead gray mb-5' style={{ width: '860px', margin: '0 auto' }}>
            We provide to you the best choices for you. Adjust it to your health
            needs and make sure you undergo treatment with our highly qualified
            doctors. You can consult with us which type of service is suitable
            for your health.
          </p>

          <div className='row'>
            <div className='col-md-6 mb-4 d-flex justify-content-center'>
              <div
                className='card p-4 text-center'
                style={{
                  width: '420px',
                  height: '355px',
                  backgroundColor: '#f8f9fa',
                  border: 'none',
                }}
              >
                <img
                  src={FrameInsurance}
                  alt='Find Insurance'
                  className='img-fluid mb-3 mx-auto'
                  style={{ width: '100px', height: 'auto' }}
                />
                <h4>Find Insurance</h4>
                <p className='lead gray'>
                  Choose your doctor from thousands of specialists, general, and
                  trusted hospitals.
                </p>
              </div>
            </div>
            <div className='col-md-6 mb-4 d-flex justify-content-center'>
              <div
                className='card p-4 text-center'
                style={{
                  width: '420px',
                  height: '355px',
                  backgroundColor: '#f8f9fa',
                  border: 'none',
                }}
              >
                <img
                  src={FrameConsultation}
                  alt='Consultation'
                  className='img-fluid mb-3 mx-auto'
                  style={{ width: '100px', height: 'auto' }}
                />
                <h4>Consultation</h4>
                <p className='lead gray'>
                  Free consultation with our trusted doctors and get the best
                  recommendations.
                </p>
              </div>
            </div>
            <div className='col-md-6 mb-4 d-flex justify-content-center'>
              <div
                className='card p-4 text-center'
                style={{
                  width: '420px',
                  height: '355px',
                  backgroundColor: '#f8f9fa',
                  border: 'none',
                }}
              >
                <img
                  src={FrameDetailsInfo}
                  alt='Details Info'
                  className='img-fluid mb-3 mx-auto'
                  style={{ width: '100px', height: 'auto' }}
                />
                <h4>Details Info</h4>
                <p className='lead gray'>
                  Get the best recommendations from our trusted doctors.
                </p>
              </div>
            </div>
            <div className='col-md-6 mb-4 d-flex justify-content-center'>
              <div
                className='card p-4 text-center'
                style={{
                  width: '420px',
                  height: '355px',
                  backgroundColor: '#f8f9fa',
                  border: 'none',
                }}
              >
                <img
                  src={FrameHealthRecords}
                  alt='Health Records'
                  className='img-fluid mb-3 mx-auto'
                  style={{ width: '100px', height: 'auto' }}
                />
                <h4>Health Records</h4>
                <p className='lead gray'>
                  Track and save your medical history and health data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='health-record-section py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <img
                src={secTwoIllustration}
                alt='Health Record'
                className='img-fluid'
                width='400'
                height='300'
              />
            </div>
            <div className='col-md-6'>
              <h2>Maintains Health Record</h2>
              <p className='lead gray'>
                Insurolife provides progressive, affordable healthcare
                accessible on mobile and online for everyone. To us, it's not
                just work. We take pride in the solutions we deliver.
              </p>
              <button
                className='btn btn-secondary btn-lg'
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#458FF6',
                  color: '#458FF6',
                  borderWidth: '1.5px',
                  borderRadius: '55px',
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='appointment-section py-5 bg-light'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 text-center text-md-left'>
              <h2>Book an Appointment with Expert</h2>
              <p className='lead gray'>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously and securely.
              </p>
              <button
                className='btn btn-secondary btn-lg'
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#458FF6',
                  color: '#458FF6',
                  borderWidth: '1.5px',
                  borderRadius: '55px',
                }}
              >
                Book Now
              </button>
            </div>
            <div className='col-md-6 text-center'>
              <img
                src={secThreeIllustration}
                alt='Appointment'
                className='img-fluid'
                width='500'
                height='300'
              />
            </div>
          </div>
        </div>
      </section>

      <footer className='footer bg-primary text-light py-4'>
        <div className='container'>
          <div className='row align-items-start'>
            <div className='col-md-4 d-flex flex-column align-items-center text-center'>
              <img
                src={FooterLogo}
                alt='Insurolife Logo'
                className='logo-img img-fluid mb-3'
                style={{ maxWidth: '100px' }}
              />
              <div>
                <h5 className='mb-0'>Insurolife</h5>
                <p className='lead'>
                  Insurolife simplifies your healthcare journey by providing
                  transparent access to insurance policies and hospital
                  networks. &copy; | Insurolife | All Rights Reserved
                </p>
              </div>
            </div>
            <div className='col-md-4 d-flex flex-column align-items-center text-center'>
              <h5 className='mb-3'>Company</h5>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <a href='#home' className='text-light text-decoration-none'>
                    Home
                  </a>
                </li>
                <li className='mb-3'>
                  <a
                    href='#insurance'
                    className='text-light text-decoration-none'
                  >
                    Insurances
                  </a>
                </li>
                <li className='mb-3'>
                  <a
                    href='#appointment'
                    className='text-light text-decoration-none'
                  >
                    Book Appointment
                  </a>
                </li>
                <li className='mb-3'>
                  <a
                    href='#hospitals'
                    className='text-light text-decoration-none'
                  >
                    Hospitals
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-4 d-flex flex-column align-items-center text-center'>
              <h5 className='mb-3'>Region</h5>
              <ul className='list-unstyled'>
                <li className='mb-3'>India</li>
                <li className='mb-3'>USA</li>
                <li className='mb-3'>Australia</li>
                <li className='mb-3'>Canada</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
