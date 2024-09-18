import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('auth-token');

  if (!token) {
    return <Navigate to='/get-started' />;
  }

  return children;
};

export default ProtectedRoute;
