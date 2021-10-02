import Navbar from "./components/Navbar/Navbar.js";
import classes from "./index.scss";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main classes={classes.main}></main>
    </div>
  );
}

export default App;
