import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";
import { useEffect, useState } from "react";

const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [cart, setCart] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log("res from axios", res);

      return res.data;
    },
  });
  useEffect(() => {
    setCart(data);
  }, [data]);
  return [cart, refetch];
};
export default useCart;
