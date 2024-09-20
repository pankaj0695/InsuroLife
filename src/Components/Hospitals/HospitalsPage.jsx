import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import { UserContext } from '../../store/user-context';
import { capitalize } from '../../helpers/helper';

import downArrowIcon from '../../assets/icons/down-arrow.svg';
import locationIcon from '../../assets/icons/location.svg';
import hospitalImage from '../../assets/hospital-images/hospital-image.jpg';
import starIcon from '../../assets/icons/star-fill-icon.svg';

import './HospitalsPage.css';

// Sample hospital data
const hospitalsData = [
  {
    id: 'hospital-1',
    hospital_name: 'City Hospital',
    image: hospitalImage,
    contactNo: '9332244551',
    city: 'Mumbai',
    state: 'Maharashtra',
    email: 'cityhospital@gmail.com',
    ratingCount: 251,
    avgRating: 4,
  },
  {
    id: 'hospital-2',
    hospital_name: 'Sunrise Hospital',
    image: hospitalImage,
    contactNo: '9322233344',
    city: 'Pune',
    state: 'Maharashtra',
    email: 'sunrisehospital@gmail.com',
    ratingCount: 312,
    avgRating: 4.2,
  },
  {
    id: 'hospital-3',
    hospital_name: 'Lotus Hospital',
    image: hospitalImage,
    contactNo: '9334455667',
    city: 'Nagpur',
    state: 'Maharashtra',
    email: 'lotushospital@gmail.com',
    ratingCount: 128,
    avgRating: 3.9,
  },
  {
    id: 'hospital-4',
    hospital_name: 'Apex Hospital',
    image: hospitalImage,
    contactNo: '9334452341',
    city: 'Nashik',
    state: 'Maharashtra',
    email: 'apexhospital@gmail.com',
    ratingCount: 198,
    avgRating: 4.1,
  },
  {
    id: 'hospital-5',
    hospital_name: 'HealthCare Clinic',
    image: hospitalImage,
    contactNo: '9332233115',
    city: 'Thane',
    state: 'Maharashtra',
    email: 'healthcareclinic@gmail.com',
    ratingCount: 245,
    avgRating: 4.5,
  },
  {
    id: 'hospital-6',
    hospital_name: 'Global Hospital',
    image: hospitalImage,
    contactNo: '9335566778',
    city: 'Ahmedabad',
    state: 'Gujarat',
    email: 'globalhospital@gmail.com',
    ratingCount: 389,
    avgRating: 4.3,
  },
  {
    id: 'hospital-7',
    hospital_name: 'Sterling Hospital',
    image: hospitalImage,
    contactNo: '9335564533',
    city: 'Surat',
    state: 'Gujarat',
    email: 'sterlinghospital@gmail.com',
    ratingCount: 278,
    avgRating: 4.1,
  },
  {
    id: 'hospital-8',
    hospital_name: 'Care Hospital',
    image: hospitalImage,
    contactNo: '9336778899',
    city: 'Vadodara',
    state: 'Gujarat',
    email: 'carehospital@gmail.com',
    ratingCount: 356,
    avgRating: 4.4,
  },
  {
    id: 'hospital-9',
    hospital_name: 'Shalby Hospital',
    image: hospitalImage,
    contactNo: '9334455667',
    city: 'Rajkot',
    state: 'Gujarat',
    email: 'shalbyhospital@gmail.com',
    ratingCount: 192,
    avgRating: 3.8,
  },
  {
    id: 'hospital-10',
    hospital_name: 'Unity Hospital',
    image: hospitalImage,
    contactNo: '9332244112',
    city: 'Gandhinagar',
    state: 'Gujarat',
    email: 'unityhospital@gmail.com',
    ratingCount: 276,
    avgRating: 4.2,
  },
  {
    id: 'hospital-11',
    hospital_name: 'Apollo Hospital',
    image: hospitalImage,
    contactNo: '9331122334',
    city: 'Bengaluru',
    state: 'Karnataka',
    email: 'apollohospital@gmail.com',
    ratingCount: 501,
    avgRating: 4.7,
  },
  {
    id: 'hospital-12',
    hospital_name: 'Fortis Hospital',
    image: hospitalImage,
    contactNo: '9332234455',
    city: 'Mysuru',
    state: 'Karnataka',
    email: 'fortishospital@gmail.com',
    ratingCount: 392,
    avgRating: 4.4,
  },
  {
    id: 'hospital-13',
    hospital_name: 'Manipal Hospital',
    image: hospitalImage,
    contactNo: '9335566788',
    city: 'Hubli',
    state: 'Karnataka',
    email: 'manipalhospital@gmail.com',
    ratingCount: 288,
    avgRating: 4.2,
  },
  {
    id: 'hospital-14',
    hospital_name: 'Sparsh Hospital',
    image: hospitalImage,
    contactNo: '9334456789',
    city: 'Mangaluru',
    state: 'Karnataka',
    email: 'sparshhospital@gmail.com',
    ratingCount: 176,
    avgRating: 4.1,
  },
  {
    id: 'hospital-15',
    hospital_name: 'Vikram Hospital',
    image: hospitalImage,
    contactNo: '9336788990',
    city: 'Belagavi',
    state: 'Karnataka',
    email: 'vikramhospital@gmail.com',
    ratingCount: 221,
    avgRating: 4,
  },
  {
    id: 'hospital-16',
    hospital_name: 'Max Healthcare',
    image: hospitalImage,
    contactNo: '9333344556',
    city: 'Delhi',
    state: 'Delhi',
    email: 'maxhealthcare@gmail.com',
    ratingCount: 625,
    avgRating: 4.6,
  },
  {
    id: 'hospital-17',
    hospital_name: 'BLK Hospital',
    image: hospitalImage,
    contactNo: '9335566777',
    city: 'New Delhi',
    state: 'Delhi',
    email: 'blkhospital@gmail.com',
    ratingCount: 450,
    avgRating: 4.5,
  },
  {
    id: 'hospital-18',
    hospital_name: 'Metro Hospital',
    image: hospitalImage,
    contactNo: '9336677889',
    city: 'Dwarka',
    state: 'Delhi',
    email: 'metrohospital@gmail.com',
    ratingCount: 348,
    avgRating: 4.3,
  },
  {
    id: 'hospital-19',
    hospital_name: 'Primus Hospital',
    image: hospitalImage,
    contactNo: '9335569876',
    city: 'Noida',
    state: 'Delhi',
    email: 'primushospital@gmail.com',
    ratingCount: 297,
    avgRating: 4.1,
  },
  {
    id: 'hospital-20',
    hospital_name: 'Delhi Heart Institute',
    image: hospitalImage,
    contactNo: '9335564444',
    city: 'Gurgaon',
    state: 'Delhi',
    email: 'delhiheart@gmail.com',
    ratingCount: 378,
    avgRating: 4.4,
  },
];
const HospitalsPage = () => {
  // const { user } = useContext(UserContext);
  const [state, setState] = useState('maharashtra');
  const [city, setCity] = useState('');

  const [filteredData, setFilteredData] = useState([]);

  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const stateOptions = [
    ...new Set(hospitalsData.map(hospital => hospital.state)),
  ];
  const cityOptions = [
    ...new Set(
      hospitalsData
        .filter(hospital => hospital.state === state)
        .map(hospital => hospital.city)
    ),
  ];

  useEffect(() => {
    const fetchHospitals = async () => {
      const token = localStorage.getItem('auth-token');

      const response = await fetch('/customer/get-hospitals', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': `${token}`,
        },
      });

      const resData = await response.json();
      console.log(resData);
      setFilteredData(resData);
    };
    fetchHospitals();
  }, [state]);

  const stateChangeHandler = e => {
    setState(e.target.value);
  };

  const cityChangeHandler = e => {
    setCity(prevCity => (prevCity === e.target.value ? '' : e.target.value));
  };

  // Apply filters and sorting
  const applyFilters = () => {
    setIsStateDropdownOpen(false);
    setIsCityDropdownOpen(false);

    let data = hospitalsData;

    if (state) {
      data = data.filter(item => item.state === state);
    }

    if (city) {
      data = data.filter(item => item.city === city);
    }

    setFilteredData(data);
  };

  return (
    <div className='hospital-page-container'>
      <div className='filters-container'>
        {/* State Filter */}
        <div className='dropdown'>
          <button
            className='dropdown-btn'
            onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
          >
            State
            <img src={downArrowIcon} width={20} alt='down arrow' />
          </button>
          {isStateDropdownOpen && (
            <div className='h-dropdown-content'>
              {stateOptions.map(item => (
                <label key={item} className='checkbox-label'>
                  <input
                    type='checkbox'
                    value={item}
                    checked={item === state}
                    name='state'
                    onChange={stateChangeHandler}
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* City Filter */}
        <div className='dropdown'>
          <button
            className='dropdown-btn'
            onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
          >
            City
            <img src={downArrowIcon} width={20} alt='down arrow' />
          </button>
          {isCityDropdownOpen && (
            <div className='h-dropdown-content'>
              {cityOptions.map(item => (
                <label key={item} className='checkbox-label'>
                  <input
                    type='checkbox'
                    value={item}
                    checked={item === city}
                    name='city'
                    onChange={cityChangeHandler}
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Apply Filters Button */}
        <button className='apply-filters-btn' onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      {/* hospital Cards */}
      <div className='hospital-cards-container'>
        {filteredData.map((hospital, index) => (
          <div key={index} className='hospital-card'>
            <img
              src={hospital.image}
              alt={hospital.hospital_name}
              className='hospital-image'
            />
            <h3>{capitalize(hospital.hospital_name)}</h3>
            <p>
              <img src={locationIcon} alt='location icon' width={20} />
              {capitalize(hospital.city)}, {capitalize(hospital.state)}
            </p>
            <p className='star-rating'>
              {hospital.avgRating}{' '}
              <img src={starIcon} alt='star icon' width={16} />
            </p>
            <button
              className='view-details-btn'
              onClick={() => {
                navigate(`/hospitals/${hospital._id}`);
              }}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsPage;
