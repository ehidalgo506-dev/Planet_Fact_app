import { useState } from "react";
import icon from "../../../assets/icon-source.svg";
import classes from "./PlanetInfo.module.scss";
function PlanetInfo(props) {
  const planet = props.planetInfo;

  function updateInfo(btnId) {
    switch (btnId) {
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
        return planet.overview.content;
        break;
    }
  }
  return (
    <article className={classes.container}>
      <h1 className={classes.header}>{planet.name}</h1>
      <p className={classes.info}>{updateInfo(props.onButtonId)}</p>

      <div className={classes.container__source}>
        <p className={classes.container__source_text}>
          Source:
          <span className={classes.container__source_span}>
            <a href={planet.source} target="_blank">
              Wikipedia
            </a>
          </span>
          <img
            src={icon}
            alt="Source Icons"
            className={classes.container__source_icon}
          />
        </p>
      </div>
    </article>
  );
}

export default PlanetInfo;
