
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import useLoading from "../Hooks/useLoading";

const AdminPrivateRoute = ({ children }) => {
  const [role, loading] = useRole()
  const Loading = useLoading()

  if(loading){
    return Loading
  }

  if (role !== "admin") {
    return <Navigate to={"/signin-or-signup"} />;
  }
  return children;
};

export default AdminPrivateRoute;
