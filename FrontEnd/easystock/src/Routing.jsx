import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import SignUp from "./components/home/SignUp";
import SignIn from "./components/home/SignIn";
import NotFound from "./components/NotFound";
import DelivaryHome from "./components/delivary/DelivaryHome";
import DelivaryNavbar from "./components/delivary/DelivaryNavbar";
import AboutUs from "./components/home/AboutUs";
import DelivaryHistory from "./components/delivary/DelivaryHistory";
import DelivaryProfile from "./components/delivary/DelivaryProfile";
import DelivaryItems from "./components/delivary/DelivaryItems";
import EditDelivaryProfile from "./components/delivary/EditDelivaryProfile";
import CustomerNavbar from "./components/customer/CustomerNavbar";
import CustomerHomePage from "./components/customer/CustomerHomePage";
import CustomerCart from "./components/customer/CustomerCart";
import CustomerOrderHistory from "./components/customer/CustomerOrderHistory";
import CustomerProfile from "./components/customer/CustomerProfile";
import CustomerAddress from "./components/customer/CustomerAddress";
import CustomerProductDescription from "./components/customer/CustomerProductDescription";
import AdminNavbar from "./components/admin/AdminNavbar";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminAllOrders from "./components/admin/AdminAllOrders";
import AdminAllProducts from "./components/admin/AdminAllProducts";
import AdminProductDescription from "./components/admin/AdminProductDescription";
import AdminInventoryData from "./components/admin/AdminInventoryData";
import AdminOrderHistory from "./components/admin/AdminOrderHistory";
import AdminSupplyHistory from "./components/admin/AdminSupplyHistory";
import AdminAddSupplier from "./components/admin/AdminAddSupplier";
import AdminSupplierDetails from "./components/admin/AdminSupplierDetails";
import CustomerEditProfile from "./components/customer/CustomerEditProfile";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/delivary",
    element: (
      <div>
        <DelivaryNavbar />
      </div>
    ),
    children: [
      {
        path: "",
        element: <DelivaryItems />,
      },
      {
        path: "delivaryhistory",
        element: <DelivaryHistory />,
      },
      {
        path: "delivaryprofile",
        element: <DelivaryProfile />,
      },
      {
        path: "editdelivaryprofile",
        element: <EditDelivaryProfile />,
      },
    ],
  },

  {
    path: "/customer",
    element: <CustomerNavbar />,
    children: [
      {
        path: "",
        element: <CustomerHomePage />,
      },
      {
        path: "cart",
        element: <CustomerCart />,
      },
      {
        path: "history",
        element: <CustomerOrderHistory />,
      },
      {
        path: "profile",
        element: <CustomerProfile />,
      },
      {
        path: "address",
        element: <CustomerAddress />,
      },
      {
        path: "product",
        element: <CustomerProductDescription />,
      },
      {
        path:"editcustomerprofile",
        element:<CustomerEditProfile />
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminNavbar />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "allorders",
        element: <AdminAllOrders />,
      },
      {
        path: "allproducts",
        element: <AdminAllProducts />,
      },
      {
        path: "product",
        element: <AdminProductDescription />,
      },
      {
        path: "inventory",
        element: <AdminInventoryData />,
      },
      {
        path: "orderhistory",
        element: <AdminOrderHistory />,
      },
      {
        path: "supplyhistory",
        element: <AdminSupplyHistory />,
      },
      {
        path: "addsupplier",
        element: <AdminAddSupplier />,
      },
      {
        path: "supplierdetails",
        element: <AdminSupplierDetails />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routing;
