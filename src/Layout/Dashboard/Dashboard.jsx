import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { useState } from "react";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  console.log("idfdsAdmin", isAdmin);

  return (
    <div className=" ">
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          // eslint-disable-next-line react/no-unknown-property
        />
        <div className="drawer-content p-4">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button ">
            Menu
          </label>
        </div>
        <div className="drawer-side top-[50px] z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-[70%] pt-2 min-h-full  bg-indigo-600 text-white font-bold">
            {/* Sidebar content here */}
            {/* {isAdmin ? ( */}
            <>
              {isAdmin ? (
                <li>
                  <NavLink to="/dashboard/addItem">
                    <FaUtensils></FaUtensils>
                    Add Items
                  </NavLink>
                </li>
              ) : null}
              {isAdmin ? (
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li>
              ) : null}

              <li>
                <NavLink to="/dashboard/workers">
                  <FaUsers></FaUsers>
                  Workers
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/supliers">
                  <FaUsers></FaUsers>
                  Supliers
                </NavLink>
              </li>
              <li>
                <NavLink to="/pond">
                  <FaUsers></FaUsers>
                  Ponds
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/expenses">
                  <FaUsers></FaUsers>
                  Expenses
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/incomes">
                  <FaUsers></FaUsers>
                  Incomes
                </NavLink>
              </li>
            </>
            {/* ) : ( */}
            <>
              <li>
                <NavLink to="/home">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart?.length})
                </NavLink>
              </li>

              <li>
                <NavLink
                  // className="drawer-toggle"
                  to="/dashboard/paymentHistory"
                >
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li>
            </>
            {/* )} */}
            {/* shared nav links */}

            <li>
              <NavLink to="/order/commonCarp">
                <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
