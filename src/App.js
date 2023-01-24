import { useState } from "react";
import "./App.css";
import Field from "./components/field/field";
import NavBar from "./components/navBar/navBar";
import Team from "./components/team/team.jsx";

function App() {
  const [squadNumber, setSquadNumber] = useState(8);
  const [homeColors, setHomeColors] = useState({
    font: "",
    border: "",
    bgr: "",
  });
  const [awayColors, setAwayColors] = useState({
    font: "",
    border: "",
    bgr: "",
  });

  return (
    <div className="App">
      <div className="navbar">
        <NavBar
          setSquadNumber={setSquadNumber}
          setHomeColors={setHomeColors}
          setAwayColors={setAwayColors}
        />
      </div>

      <div className="field">
        <Field param={"circle"}></Field>
      </div>
      <div className="benches">
        <div className="homeTeam">
          <Team squadSize={squadNumber} colors={homeColors}></Team>
        </div>
        <div className="awayTeam">
          <Team squadSize={squadNumber} colors={awayColors}></Team>
        </div>
      </div>
    </div>
  );
}

export default App;
