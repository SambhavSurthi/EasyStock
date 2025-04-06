import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/login" />;

  const decoded = jwt_decode(token);
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
