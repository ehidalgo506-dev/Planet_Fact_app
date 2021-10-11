import classes from "./PlanetNav.module.scss";
import { useState } from "react";

function PlanetNav(props) {
  const [isActiveBtn, setActiveBtn] = useState(1);

  props.onGetButtonId(isActiveBtn);

  return (
    <section className={classes.container}>
      <button
        className={`${classes.btn} ${
          isActiveBtn === 1 ? classes.btn_active : ""
        }`}
        onClick={() => setActiveBtn(1)}
      >
        <span>01</span>Overview
      </button>
      <button
        className={`${classes.btn} ${
          isActiveBtn === 2 ? classes.btn_active : ""
        }`}
        onClick={() => setActiveBtn(2)}
      >
        <span>02</span>Internal Structure
      </button>
      <button
        className={`${classes.btn} ${
          isActiveBtn === 3 ? classes.btn_active : ""
        }`}
        onClick={() => setActiveBtn(3)}
      >
        <span>03</span>Surface Geology
      </button>
    </section>
  );
}

export default PlanetNav;
