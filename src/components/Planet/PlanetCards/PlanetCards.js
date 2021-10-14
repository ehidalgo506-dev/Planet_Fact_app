import classes from "./PlanetCards.module.scss";

function PlanetCards(props) {
  return (
    <article className={classes.container}>
      <h3 className={classes.title}>{props.onTitle}</h3>
      <p className={classes.data}>{props.onData}</p>
    </article>
  );
}

export default PlanetCards;
