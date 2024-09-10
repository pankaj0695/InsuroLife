import FooterLogo from '../../assets/insurolife-logo-white.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row align-items-start'>
          <div className='col-md-4 d-flex flex-column align-items-left text-left'>
            <div className='d-flex flex-row align-items-center'>
              <img
                src={FooterLogo}
                alt='Insurolife Logo'
                className='logo-img img-fluid mb-3'
                style={{ maxWidth: '45px' }}
              />
              <h5 className='footer-title'>Insurolife</h5>
            </div>
            <div>
              <p className='footer-desc'>
                Insurolife simplifies your healthcare journey by providing
                transparent access to insurance policies and hospital networks.
              </p>
              <p className='footer-desc'>
                &copy;Insurolife 2024. All rights reserved
              </p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-column align-items-center text-left'>
            <h5 className='footer-subtitle'>Company</h5>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <a href='#home' className='footer-desc text-decoration-none'>
                  Home
                </a>
              </li>
              <li className='mb-3'>
                <a
                  href='#insurance'
                  className='footer-desc text-decoration-none'
                >
                  Insurances
                </a>
              </li>
              <li className='mb-3'>
                <a
                  href='#appointment'
                  className='footer-desc text-decoration-none'
                >
                  Appointment
                </a>
              </li>
              <li className='mb-3'>
                <a
                  href='#hospitals'
                  className='footer-desc text-decoration-none'
                >
                  Hospitals
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-4 d-flex flex-column align-items-center text-left'>
            <h5 className='footer-subtitle'>Region</h5>
            <ul className='list-unstyled'>
              <li className='mt-0 mb-3 footer-desc'>India</li>
              <li className='mt-0 mb-3 footer-desc'>USA</li>
              <li className='mt-0 mb-3 footer-desc'>Australia</li>
              <li className='mt-0 mb-3 footer-desc'>Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
