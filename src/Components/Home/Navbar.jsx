import { Link, NavLink } from 'react-router-dom';

import MainLogo from '../../assets/insurolife-logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <header className='header bg-white py-4'>
      <div className='container d-flex justify-content-between align-items-center'>
        <a href='/' className='d-flex align-items-center text-decoration-none'>
          <img src={MainLogo} alt='Logo' className='logo' />
          <div className='ml-3'>
            <h1 className='font-weight-bold mb-0 mx-2 title'>Insurolife</h1>
          </div>
        </a>
        <nav>
          <ul className='nav align-items-center'>
            <li className='navitem'>
              <NavLink to='/' className='navlink'>
                Home
              </NavLink>
            </li>
            <li className='navitem'>
              <NavLink to='/insurances' className='navlink'>
                Insurances
              </NavLink>
            </li>
            <li className='navitem'>
              <NavLink to='/appointment' className='navlink'>
                Appointment
              </NavLink>
            </li>
            <li className='navitem'>
              <Link to='/get-started' className='nav-button'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
