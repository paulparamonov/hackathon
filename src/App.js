import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/cartContext";
import FavoritesContextProvider from "./contexts/FavoritesContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
      <FavoritesContextProvider>
        <BrandsContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        </BrandsContextProvider>
      </FavoritesContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
    
  );
};

export default App;


/*
CRUD
фильтрация
пагинация
поиск
корзина
избранное
роутинг
админка
*/