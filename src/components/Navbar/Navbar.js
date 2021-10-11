import { MenuItems } from "../MenuItems";
// import "./Navbar.module.scss";
import "./Navbar.scss";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [clickedMenu, setClickedMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [linkActive, setLinkActive] = useState(false);

  const menuList = useRef();

  const menuButtonHandler = () => {
    setClickedMenu(!clickedMenu);
    setIsActive(!isActive);
  };

  const activateLinkHandler = () => {
    setIsActive(false);
    setClickedMenu(false);
    setLinkActive(!linkActive);
  };

  return (
    <nav className="nav">
      <div onClick={menuButtonHandler} className={`nav__group `}>
        <h3 className="nav__header">The Planets</h3>
        {/* Hmaburger Icon */}
        <i
          className={`${clickedMenu ? "fas fa-times" : "fas fa-bars"} navIcon`}
        ></i>
      </div>

      {/* Main Navigation */}
      <ul className={`nav__ul ${isActive ? "active" : null}`} ref={menuList}>
        {MenuItems.map((element, index) => {
          return (
            <NavLink
              key={index}
              className={element.cName}
              to={element.path}
              onClick={activateLinkHandler}
              activeClassName="nav__link_active"
            >
              <div className={`nav__links-dot ${element.cNameDot}`}></div>
              <p to={element.path} className="nav__links-a">
                {element.title}
              </p>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
