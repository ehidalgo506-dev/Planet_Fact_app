import Navbar from "./components/Navbar/Navbar.js";
import { Route, Switch, Redirect } from "react-router-dom";
import classes from "./index.scss";
import Planet from "./components/Planet/Planet.js";
import data from "./data.json";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Mercury"></Redirect>
        </Route>
        {data.map((planet, index) => {
          return (
            <Route path={`/${planet.name}`} key={index}>
              <Planet
                planet={planet.name}
                getPlanetInfo={data.filter(
                  (element) => element.name === planet.name
                )}
              ></Planet>
            </Route>
          );
        })}
      </Switch>
      <main classes={classes.main}></main>
    </div>
  );
}

export default App;
