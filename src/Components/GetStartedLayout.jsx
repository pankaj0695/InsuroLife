import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Home/Footer';
import GSNavbar from './GetStarted/GSNavbar';

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
