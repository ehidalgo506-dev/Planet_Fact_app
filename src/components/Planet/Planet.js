import { useEffect, useState } from "react";
import classes from "./Planet.module.scss";
import PlanetCards from "./PlanetCards/PlanetCards";
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
          //Enable this to apply effect to all the diff src image
          // key={updateImageHandler(btnId)}
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

      <footer className={classes.footer}>
        <PlanetCards
          onTitle="Rotation Time"
          onData={planet.rotation}
        ></PlanetCards>
        <PlanetCards
          onTitle="Revolution Time"
          onData={planet.revolution}
        ></PlanetCards>
        <PlanetCards onTitle="Radius" onData={planet.radius}></PlanetCards>
        <PlanetCards
          onTitle="Average temp."
          onData={planet.temperature}
        ></PlanetCards>
      </footer>
    </section>
  );
}

export default Planet;
