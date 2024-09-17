import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './Components/Layout/MainLayout';
import GetStartedLayout from './Components/Layout/GetStartedLayout';
import ProfileLayout from './Components/Layout/ProfileLayout';
import UserProfilePage from './Components/Profile/UserProfile/UserProfilePage';
import HospitalProfilePage from './Components/Profile/HospitalProfile/HospitalProfilePage';
import InsurerProfilePage from './Components/Profile/InsurerProfile/InsurerProfilePage';
import HomePage from './Components/Home/HomePage';
import GetStartedPage from './Components/GetStarted/GetStartedPage';
import LoginPage from './Components/LoginAndSignup/LoginPage';
import SignupPage from './Components/LoginAndSignup/SignupPage';
import InsurancesPage from './Components/Insurances/InsurancesPage';
import InsuranceDetailPage from './Components/Insurances/InsuranceDetailPage';
import HospitalsPage from './Components/Hospitals/HospitalsPage';
import HospitalDetailPage from './Components/Hospitals/HospitalDetailPage';
import AppointmentPage from './Components/Appointment/AppointmentPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/insurances',
        element: <InsurancesPage />,
      },
      { path: '/insurances/:insurance_id', element: <InsuranceDetailPage /> },
      {
        path: '/hospitals',
        element: <HospitalsPage />,
      },
      { path: '/hospitals/:hospital_id', element: <HospitalDetailPage /> },
      {
        path: '/appointment',
        element: <AppointmentPage />,
      },
    ],
  },
  {
    path: '/',
    element: <GetStartedLayout />,
    children: [
      {
        path: '/get-started',
        element: <GetStartedPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      { path: '/signup', element: <SignupPage /> },
    ],
  },
  {
    path: '/',
    element: <ProfileLayout />,
    children: [
      {
        path: '/user/profile',
        element: <UserProfilePage />,
      },
      {
        path: '/hospital/profile',
        element: <HospitalProfilePage />,
      },
      { path: '/insurer/profile', element: <InsurerProfilePage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
