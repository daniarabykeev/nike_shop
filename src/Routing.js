import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";

import Cart from "./components/Cart/Cart";
// import CollectionList from "./components/Collection/CollectionList";

import CollectionList from "./components/Collection/CollectionList";
import Contact from "./components/Contact/Contact";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import Favorite from "./components/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";
import MyCards from "./components/MyCard/MyCard";
import Stores from "./components/Stores/Stores";
import Success from "./components/Success/Success";
import { authContext } from "./context/authContext";
import AdminPages from "./pages/AdminPages";
import Error404 from "./pages/Error404";

let ADMIN = "2@gmail.com";

const Routing = () => {
  let PUBLIC_ROUTE = [
    {
      link: "/",
      element: <Main />,
      id: 2,
    },
    {
      link: "/stores",
      element: <Stores />,
      id: 3,
    },
    {
      link: "/collection",
      element: <CollectionList />,
      id: 4,
    },
    {
      link: "/contact",
      element: <Contact />,
      id: 5,
    },
    {
      link: "/collection/:id",
      element: <Details />,
      id: 6,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 7,
    },
    {
      link: "/credit",
      element: <MyCards />,
      id: 8,
    },
    {
      link: "/success",
      element: <Success />,
      id: 11,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 9,
    },
    {
      link: "/favorite",
      element: <Favorite />,
      id: 10,
    },
  ];
  let ADMIN_ROUTE = [
    {
      link: "/admin",
      element: <AdminPages />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { currentUser } = useContext(authContext);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTE.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                currentUser === ADMIN ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
