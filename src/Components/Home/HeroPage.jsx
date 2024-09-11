import { Link } from 'react-router-dom';

import illustration from '../../assets/images/illustration.svg';
import './HeroPage.css';

function HeroPage() {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 text-left text-md-left'>
            <h1 className='heading'>Where Insurance Meets Transparency</h1>
            <p className='description'>
              Insurolife simplifies your healthcare journey by providing
              transparent access to insurance policies and hospital networks.
              Discover the best insurance for you, and book appointments with
              ease, all in one place.
            </p>
            <Link to='get-started' className='button'>
              Get Started
            </Link>
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
  );
}

export default HeroPage;
