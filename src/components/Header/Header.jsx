import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined , UserOutlined , StarOutlined,MenuOutlined ,ArrowLeftOutlined  } from "@ant-design/icons";
import  Menu  from "./Menu";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const { getFavorites, favoritesLength } = useContext(FavoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);
  const [menuActive, setMenuActive]=useState(false)
  const NAV_ITEMS = [
    {
      title: "Бренды",
      link: "/brands",
      id: 1,
    },
    {
      title: "Ноутбуки",
      link: "/products",
      id: 2,
    },
    {
      title: "Магазины",
      link: "/map",
      id: 3,
    },
    {
      title: "Акции",
      link: "/sale",
      id: 4,
    },
    {
      title: "Контакты",
      link: "/contacts",
      id: 5,
    },
  ];
  return (
    <>
      <nav>
      <div className="logo">
        {/* <div className="burger-menu">
        
        <ArrowLeftOutlined 
          style={{ fontSize: "30px", cursor: "pointer" ,color:"white"}}
        />
        </div> */}
        <MenuOutlined
          className="btn-burger" 
          style={{ fontSize: "30px", cursor: "pointer" ,color:"white"}}
          onClick={()=>setMenuActive(!menuActive)}
        />
        <Link to="/">
          <h1 className="header-logo">Notebook Store</h1>
        </Link>
      </div>

      <div className="right-nav">

      <p className="greetings">
      Привет, {email ? (
       <span>{email}</span>
          ) : 
          <span>Гость</span>}
          </p>

        <div className="auth-icon">
          {email ? (
            <Link to="/auth">
              <button className="logout-btn" style={{cursor: "pointer"}} onClick={handleLogout}>
              Logout
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">
              <UserOutlined
               style={{cursor: "pointer"}}/>
              </button>
            </Link>
          )}
        </div>
        <div className="cart">
        <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer" ,color:"white"}}
              />
            </Badge>
          </Link>
        </div>
        <div className="favorites">
        <Link to="/favorites">
            <Badge count={+favoritesLength}>
              <StarOutlined
                style={{ fontSize: "25px", cursor: "pointer" ,color:"white"}}
              />
            </Badge>
          </Link>
        </div>
        </div>
      </nav>
      <Menu className="burger-menu"
       active={menuActive} setActive={setMenuActive}  items={NAV_ITEMS}/>
      
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

        {email === "sereuspro94@gmail.com" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
      </div>
      
    </>
  );
};

export default Header;
