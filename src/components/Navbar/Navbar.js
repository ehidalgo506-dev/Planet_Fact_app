import { MenuItems } from "../MenuItems";
// import "./Navbar.module.scss";
import "./Navbar.scss";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [clickedMenu, setClickedMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const menuList = useRef();

  const menuButtonHandler = () => {
    setClickedMenu(!clickedMenu);
    setIsActive(!isActive);
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
            <li key={index} className={element.cName} to={element.path}>
              <div className={`nav__links-dot ${element.cNameDot}`}></div>
              <Link to={element.path}>{element.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
