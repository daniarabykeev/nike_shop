import React from "react";

import Routing from "./Routing";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ContextProductsProvider from "./context/contextProducts";
import CartContextProvider from "./context/cartContext";
import AuthContextProvider from "./context/authContext";
import FavoriteContextProvider from "./context/favoriteContext";
const App = () => {
  return (
    <FavoriteContextProvider>
      <AuthContextProvider>
        <ContextProductsProvider>
          <CartContextProvider>
            <Routing />
          </CartContextProvider>
        </ContextProductsProvider>
      </AuthContextProvider>
    </FavoriteContextProvider>
  );
};

export default App;
