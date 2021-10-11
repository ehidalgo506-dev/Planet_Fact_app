import { useEffect, useState } from "react";
import classes from "./Planet.module.scss";
import PlanetInfo from "./PlanetInfo/PlanetInfo";
import PlanetNav from "./PlanetNav/PlanetNav";

function Planet(props) {
  const [planet] = props.getPlanetInfo;
  const [btnId, setBtnId] = useState(1);
  let imageType = planet.name.toLowerCase();

  function buttonIdHandler(numb) {
    setBtnId(numb);
  }

  function updateImageHandler(numb) {
    switch (numb) {
      case 1:
        return (imageType = planet.name.toLowerCase());
        break;

      case 2:
        return (imageType = `${planet.name.toLowerCase()}-internal`);
        break;
      case 3:
        return planet.name.toLowerCase();
        break;

      default:
        break;
    }
  }

  return (
    <section className={`${classes.container}`}>
      {/* Images */}
      <div className={`${classes.container__image}`}>
        <img
          // key={updateImageHandler(btnId)} //Enable this to apply effect to all the diff src image
          src={
            require(`../../assets/planet-${updateImageHandler(btnId)}.svg`)
              .default
          }
          // className={classes.planet__image}
          className={`${classes.planet__image} ${classes.fade_inUp}`}
          alt={`Planet ${planet.name}`}
        />

        <div
          className={`${classes.container__planet_surface} ${
            btnId === 3 ? "" : classes.hide
          }`}
        >
          <img
            src={
              require(`../../assets/geology-${planet.name.toLowerCase()}.png`)
                .default
            }
            className={classes.planet__surface}
            alt="Planet Surface"
          />
        </div>
      </div>

      {/* PlanetInfo */}
      <section className={classes.container__planetInfo}>
        <PlanetInfo planetInfo={planet} onButtonId={btnId}></PlanetInfo>
      </section>

      {/* Planet Navigation */}
      <div className={classes.container__planetNav}>
        <PlanetNav
          className={classes.container__planetNav}
          onGetButtonId={buttonIdHandler}
        ></PlanetNav>
      </div>

      {/* Planet Cards */}
      <div className={classes.container__planetCards}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
    </section>
  );
}

export default Planet;
