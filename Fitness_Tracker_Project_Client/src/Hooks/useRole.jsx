import { useEffect, useState } from "react";
import { GetRole } from "../Utils/Utils";
import useAuth from "./useAuth";

const useRole = () => {
  const [role, setRole] = useState();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    GetRole(user).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return [role, loading];
};

export default useRole;
