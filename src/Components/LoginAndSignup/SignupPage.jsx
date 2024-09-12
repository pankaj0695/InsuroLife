import { useLocation, useNavigate } from 'react-router-dom';

import './LoginAndSignupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || { role: 'customer' };

  return (
    <div className='signup-page-container'>
      <h2>
        Signup as{' '}
        {role === 'customer'
          ? 'Customer'
          : role === 'hospital'
          ? 'Hospital Authority'
          : 'Insurance Company Authority'}
      </h2>
      {/* Signup form */}
      <form className='signup-form'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required />

        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          required
        />

        <button type='submit' className='signup-btn'>
          Signup
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <span
          onClick={() => {
            navigate('/login', { state: { role } });
          }}
        >
          Login here
        </span>
      </p>{' '}
      {/* Link to login page */}
    </div>
  );
};

export default SignupPage;
