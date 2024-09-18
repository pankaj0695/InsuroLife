import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { UserContext } from '../../store/user-context';

import 'react-phone-input-2/lib/style.css';
import './LoginAndSignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(UserContext);
  const { role } = location.state || { role: 'customer' };

  const submitHandler = async e => {
    e.preventDefault();

    if (
      !name ||
      name.trim().length === 0 ||
      !contactNo ||
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 8 ||
      confirmPassword !== password
    )
      return;

    let userData, response, resData;

    switch (role) {
      case 'customer':
        if (
          !gender ||
          !dob ||
          dob.trim().length === 0 ||
          !city ||
          city.trim().length === 0 ||
          !state ||
          state.trim().length === 0
        )
          return;

        userData = {
          name,
          gender,
          dob,
          city: city.toLowerCase(),
          state: state.toLowerCase(),
          contactNo,
          email,
          password,
        };

        response = await fetch('/customer/signup/', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status !== 200) return;

        resData = await response.json();
        login(resData.token, role, resData.user);
        window.location.replace('/');

        break;

      case 'hospital':
        if (
          !city ||
          city.trim().length === 0 ||
          !state ||
          state.trim().length === 0
        )
          return;

        userData = {
          hospital_name: name.toLowerCase(),
          contactNo,
          city: city.toLowerCase(),
          state: state.toLowerCase(),
          email,
          password,
        };

        response = await fetch('/hospital/signup/', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status !== 200) return;

        resData = await response.json();
        login(resData.token, role, resData.hospital);
        window.location.replace('/');

        break;

      case 'insurer':
        userData = {
          company_name: name.toLowerCase(),
          contactNo,
          email,
          password,
        };
        response = await fetch('/insurer/signup/', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status !== 200) return;

        resData = await response.json();
        login(resData.token, role, resData.company);
        window.location.replace('/');

        break;

      default:
        break;
    }
  };

  return (
    <div className='signup-page-container'>
      <h2 className='heading2'>
        Signup as{' '}
        {role === 'customer'
          ? 'Customer'
          : role === 'hospital'
          ? 'Hospital Authority'
          : 'Insurance Company Authority'}
      </h2>
      {/* Signup form */}
      <form className='signup-form' onSubmit={submitHandler}>
        <label htmlFor='name'>
          {role === 'customer'
            ? 'Name'
            : role === 'hospital'
            ? 'Hospital Name'
            : 'Company Name'}
        </label>
        <input
          type='text'
          id='name'
          name='name'
          required
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />

        {role === 'customer' && (
          <>
            <label htmlFor='dob'>Date of Birth</label>
            <input
              type='date'
              id='dob'
              name='dob'
              required
              value={dob}
              onChange={e => {
                setDob(e.target.value);
              }}
            />
            <label htmlFor='gender'>Gender</label>
            <select
              id='gender'
              value={gender}
              onChange={e => {
                setGender(e.target.value);
              }}
              required
            >
              <option value='' disabled>
                Select your gender
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </>
        )}

        {role !== 'company' && (
          <>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              required
              value={city}
              onChange={e => {
                setCity(e.target.value);
              }}
            />

            <label htmlFor='state'>State</label>
            <input
              type='text'
              id='state'
              name='state'
              required
              value={state}
              onChange={e => {
                setState(e.target.value);
              }}
            />
          </>
        )}
        <label htmlFor='contact-no'>Contact No</label>
        <PhoneInput
          country={'in'}
          enableSearch={true}
          disableDropdown={false}
          value={contactNo}
          onChange={phone => setContactNo(phone)}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          required
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
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
      </p>
    </div>
  );
};

export default SignupPage;
