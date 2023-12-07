import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to={"/signin-or-signup"} />;
  }
  return children;
};

export default PrivateRoute;