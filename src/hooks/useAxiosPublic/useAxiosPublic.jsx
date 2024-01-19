import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://raduana-khawla.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
