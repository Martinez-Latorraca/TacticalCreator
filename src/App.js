import { useState } from "react";
import "./App.css";
import Field from "./components/field/field";
import NavBar from "./components/navBar/navBar";
import Team from "./components/team/team.jsx";

function App() {
  const [pattern, setPattern] = useState("Circle");
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
<<<<<<< HEAD
    <div className="App">
      <NavBar
        setSquadNumber={setSquadNumber}
        setHomeColors={setHomeColors}
        setAwayColors={setAwayColors}
      />
      <Field param={pattern}></Field>
      {/*
=======

      <div className="App">
        <div className="navbar" >
          <NavBar setSquadNumber={setSquadNumber} setHomeColors={setHomeColors} setAwayColors={setAwayColors} />
        </div>
        <div className="field">
          <Field param={pattern}></Field>
        </div>
        {/*
>>>>>>> fb3ba1e0dc46c1117617641e71b0379a940041e1
        <div>
        <select
        className="patternSelector"
        onChange={(e) => setPattern(e.target.value)}
        >
        <option selected disabled value="">
        Selecciona la patron
        </option>
        <option value="Circles">Circulos</option>
        <option value="Lines">Lineas</option>
        <option value="Squares">Cuadrados</option>
        </select>
        </div>
      */}
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
