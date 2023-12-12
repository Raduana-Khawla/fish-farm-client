import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Menu/Order/Order/Order";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AdminRoute from "../Routes/AdminRoute/AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import PondFeature from "../Pages/Dashboard/Pond/Pond";
import Contact from "../Components/Contact/Contact";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Income from "../Pages/Dashboard/Income/Income";
import Expense from "../Pages/Dashboard/Expense/Expense";
import Pond from "../Pages/Dashboard/Pond/Pond";
import Workers from "../Pages/Dashboard/Workers/Workers";
import Suplier from "../Pages/Dashboard/Suplier/Suplier";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },

      {
        path: "pond",
        element: <PondFeature></PondFeature>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          // normal user routes
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "payment",
            element: <Payment></Payment>,
          },
          {
            path: "paymentHistory",
            element: <PaymentHistory></PaymentHistory>,
          },

          // admin only routes
          {
            path: "addItem",
            element: (
              <AdminRoute>
                <AddItem></AddItem>
              </AdminRoute>
            ),
          },
          {
            path: "manageItems",
            element: (
              <AdminRoute>
                <ManageItems></ManageItems>
              </AdminRoute>
            ),
          },
          {
            path: "updateItem/:id",
            element: (
              <AdminRoute>
                <UpdateItem></UpdateItem>
              </AdminRoute>
            ),
            loader: ({ params }) =>
              fetch(`https://fish-farm-server.onrender.com/menu/${params.id}`),
          },
          {
            path: "users",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
          {
            path: "workers",
            element: (
              <AdminRoute>
                <Workers></Workers>
              </AdminRoute>
            ),
          },
          {
            path: "ponds",
            element: (
              <AdminRoute>
                <Pond></Pond>
              </AdminRoute>
            ),
          },
          {
            path: "supliers",
            element: (
              <AdminRoute>
                <Suplier></Suplier>
              </AdminRoute>
            ),
          },
          {
            path: "expenses",
            element: (
              <AdminRoute>
                <Expense></Expense>
              </AdminRoute>
            ),
          },
          {
            path: "incomes",
            element: (
              <AdminRoute>
                <Income></Income>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
