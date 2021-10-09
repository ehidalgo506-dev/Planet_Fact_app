import { useEffect, useState } from "react";
import classes from "./MainContainer.module.scss";
import PlanetInfo from "./PlanetInfo/PlanetInfo";

function MainContainer(props) {
  const [planet] = props.planetInfo;
  const [btnActive, setBtnActive] = useState(1);

  const getButtonActive = (buttonNumber) => {
    setBtnActive(buttonNumber);
  };

  function updateImage(numb) {
    switch (numb) {
      case 1:
        return planet.name.toLowerCase();
        break;
      case 2:
        return `${planet.name.toLowerCase()}-internal`;
        break;
      case 3:
        return "earth";
        break;
      default:
        return planet.name.toLowerCase();
        break;
    }
  }

  const logo = require(`../../../assets/planet-${updateImage(btnActive)}.svg`);

  return (
    <section className={classes.section}>
      <div className={classes.img__container}>
        <img src={logo.default} alt={`${planet.name} `} />
      </div>
      <PlanetInfo
        onGetPlanet={planet}
        onButtonActive={getButtonActive}
      ></PlanetInfo>
    </section>
  );
}

export default MainContainer;
