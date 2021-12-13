import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


import "./Menu.css"

const Menu = ({ setActive, active }) => {
  const location = useLocation();
  const {
    user: { email },
  } = useAuth();

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
        <div className={active ? 'menu active': 'menu' } onClick={()=>setActive(false)}>
                <div className="menu-content" onClick={e=>e.stopPropagation()} >
                <div className="navbar-burger">
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
                </div>
            </div>

    )
    
}
export default Menu;