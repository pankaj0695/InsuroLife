import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ProfileLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default ProfileLayout;
