import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const navigate = useNavigate();

  const handleNavigation = role => {
    navigate(`/login`, { state: { role } });
  };

  return (
    <div className='get-started-container'>
      <h1 className='get-started-title'>How do you want to use Insurolife?</h1>
      <div className='button-group'>
        <button
          onClick={() => handleNavigation('customer')}
          className='get-started-btn'
        >
          Customer
        </button>
        <button
          onClick={() => handleNavigation('hospital')}
          className='get-started-btn'
        >
          Hospital Authority
        </button>
        <button
          onClick={() => handleNavigation('insurer')}
          className='get-started-btn'
        >
          Insurance Company Authority
        </button>
      </div>
    </div>
  );
};

export default GetStartedPage;
