import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import GSNavbar from '../Navbar/GSNavbar';

const GetStartedLayout = () => {
  return (
    <Fragment>
      <GSNavbar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default GetStartedLayout;
