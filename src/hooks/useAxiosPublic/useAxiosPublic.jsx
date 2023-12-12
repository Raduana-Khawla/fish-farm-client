import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://fish-farm-server.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
