import { useLocation, useNavigate } from 'react-router-dom';

import './LoginAndSignupPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || { role: 'customer' };

  return (
    <div className='login-page-container'>
      <h2>
        Login as{' '}
        {role === 'customer'
          ? 'Customer'
          : role === 'hospital'
          ? 'Hospital Authority'
          : 'Insurance Company Authority'}
      </h2>
      {/* Login form */}
      <form className='login-form'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required />

        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <span
          onClick={() => {
            navigate('/signup', { state: { role } });
          }}
        >
          Signup here
        </span>
      </p>{' '}
      {/* Link to signup page */}
    </div>
  );
};

export default LoginPage;
