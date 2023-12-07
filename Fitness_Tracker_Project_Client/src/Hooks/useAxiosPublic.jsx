import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://fitness-tracker-project-server.vercel.app",
  withCredentials: true,
});

const useAxiosPublic = () => {
  axiosPublic.interceptors.request.use(
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

  return axiosPublic;
};

export default useAxiosPublic;
