import MainLogo from '../../assets/insurolife-logo.svg';
import './GSNavbar.css';

function GSNavbar() {
  return (
    <header className='header gs-header'>
      <div className='container d-flex justify-content-between align-items-center'>
        <a href='/' className='d-flex align-items-center text-decoration-none'>
          <img src={MainLogo} alt='Logo' className='gs-logo' />
          <div className='ml-3'>
            <h1 className='mb-0 mx-2 gs-title'>Insurolife</h1>
          </div>
        </a>
      </div>
    </header>
  );
}

export default GSNavbar;
