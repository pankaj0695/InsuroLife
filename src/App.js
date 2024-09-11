import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Components/Layout';
import HomePage from './Components/Home/HomePage';
import GetStartedPage from './Components/GetStarted/GetStartedPage';
import LoginPage from './Components/Login/LoginPage';
import SignupPage from './Components/Signup/SignupPage';
import ProfilePage from './Components/Profile/ProfilePage';
import InsurancesPage from './Components/Insurances/InsurancesPage';
import AppointmentPage from './Components/Appointment/AppointmentPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/profile', element: <ProfilePage /> },
      {
        path: '/insurances',
        element: <InsurancesPage />,
      },
      {
        path: '/appointment',
        element: <AppointmentPage />,
      },
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
