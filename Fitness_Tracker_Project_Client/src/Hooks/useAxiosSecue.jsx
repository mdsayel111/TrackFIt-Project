import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AxiosSecue = axios.create({
  baseURL: "https://fitness-tracker-project-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecue = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AxiosSecue.interceptors.request.use(
      function (config) {
        config.headers = {
          token: localStorage.getItem("token"),
        };
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    AxiosSecue.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response.status >= 400 && error.response.status < 500) {
          navigate("/signin-or-signup");
        }
        if(error.response.status >= 500){
          window.error = {massage: "Server Side Error !"}
          navigate("/server-side-error")
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return AxiosSecue;
};

export default useAxiosSecue;
