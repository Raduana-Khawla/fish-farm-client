import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import useCart from "../../../hooks/useCart/useCart";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div
        className="navbar z-10
       bg-white text-gray-600 shadow-sm border-b sticky top-0 rounded-e-md"
      >
        <div className="flex flex-row navbar-start">
          <img
            src="https://i.ibb.co/LpgWNQP/logo.png"
            alt="Fish Logo"
            className="h-12 w-12"
          />
          <h2 className="p-3">Fish Farm</h2>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end px-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <Link to="/dashboard/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <div className="badge badge-sm indicator-item">
                    +{cart?.length || 0}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end md:flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content text-white text-bold mt-3 z-[1] p-2 shadow bg-indigo-400 rounded-box w-52">
              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost btn-circle p-4 flex flex-row  items-center text-white text-sm"
                  >
                    <GrUserManager />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li className="list-none p-2 flex flex-row items-center text-white text-sm">
                    <Link to="/login">
                      <FaUser />
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="list-none p-2 flex flex-row items-center text-white text-sm">
                <Link to="/dashboard/payment">
                  {" "}
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
