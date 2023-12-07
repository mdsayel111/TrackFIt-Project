import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import useLoading from "../Hooks/useLoading";

const AdminAndTrainerPrivateRoute = ({ children }) => {
  const [role, loading] = useRole();
  const Loading = useLoading();

  if (loading) {
    return Loading;
  }

  if (role === "trainer" || role === "admin") {
    return children;
    
  }
  return <Navigate to={"/signin-or-signup"} />;
};

export default AdminAndTrainerPrivateRoute;
