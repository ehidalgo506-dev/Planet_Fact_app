import classes from "./PlanetInfo.module.scss";
import sourceIMG from "../../../../assets/icon-source.svg";
import { useState } from "react";
function PlanetInfo(props) {
  const planet = props.onGetPlanet;
  const [isActive, setIsActive] = useState(1);

  function displayInfo(numb) {
    switch (numb) {
      case 1:
        return planet.overview.content;
        break;

      case 2:
        return planet.structure.content;
        break;

      case 3:
        return planet.geology.content;
        break;

      default:
        break;
    }
  }

  props.onButtonActive(isActive);

  return (
    // Header of the planet
    <article className={classes.planet__info}>
      <div className={classes.planet__info_header}>
        <h1 className={classes.planet__info_title}>{planet.name}</h1>
        <p>{displayInfo(isActive)}</p>
        {/* Source Element */}

        <p className={classes.planet__info_source}>
          Source:
          <a href={`${planet.overview.source}`} target="_blank">
            <span>Wikipedia</span>
            <img src={sourceIMG} alt="Source icon" />
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div className={classes.buttons__container}>
        <button
          onClick={() => setIsActive(1)}
          className={`${classes.btn} ${
            isActive === 1 ? classes.btn_active : ""
          }`}
        >
          <span className={classes.btn__number}>01</span> Overview
        </button>
        <button
          onClick={() => setIsActive(2)}
          className={`${classes.btn} ${
            isActive === 2 ? classes.btn_active : ""
          }`}
        >
          <span className={classes.btn__number}>02</span> Internal Structure
        </button>
        <button
          onClick={() => setIsActive(3)}
          className={`${classes.btn} ${
            isActive === 3 ? classes.btn_active : ""
          }`}
        >
          <span className={classes.btn__number}>03</span> Surface Geology
        </button>
      </div>
    </article>
  );
}

export default PlanetInfo;
