import MainContainer from "./MainContainer/MainContainer";
import data from "../../data.json";

function Planet(props) {
  return (
    <div>
      <MainContainer planetInfo={props.getPlanetInfo}></MainContainer>
    </div>
  );
}

export default Planet;
