import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import BottomNav from "../Pages/Shared/BottomNav/BottomNav";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <BottomNav />}
    </div>
  );
};

export default Main;
