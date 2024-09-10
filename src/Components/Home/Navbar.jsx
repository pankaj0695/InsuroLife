import MainLogo from '../../assets/insurolife-logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <header className='header bg-white py-4'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img src={MainLogo} alt='Logo' className='logo' />
          <div className='ml-3'>
            <h1 className='font-weight-bold mb-0 mx-2 title'>Insurolife</h1>
          </div>
        </div>
        <nav>
          <ul className='nav align-items-center'>
            <li className='navitem'>
              <a href='#home' className='navlink'>
                Home
              </a>
            </li>
            <li className='navitem'>
              <a href='#insurance' className='navlink'>
                Insurances
              </a>
            </li>
            <li className='navitem'>
              <a href='#appointment' className='navlink'>
                Appointment
              </a>
            </li>
            <li className='navitem'>
              <button className='nav-button'>Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
