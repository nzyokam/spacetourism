
import NavBar from '../components/NavBar';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children || <Outlet />}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
