import { useState } from "react";
import "./App.css";
import Field from "./components/field/field";
import NavBar from "./components/navBar/navBar";
import Team from "./components/team/team.jsx";



function App() {
  // eslint-disable-next-line no-unused-vars
  const [pattern, setPattern] = useState("Circle");
  const [squadNumber, setSquadNumber] = useState(8);
  const [homeColors, setHomeColors] = useState({font:"", 
    border:"", 
    bgr:"" 
  });
  const [awayColors, setAwayColors] = useState({font:"", 
    border:"", 
    bgr:"" 
  });

  return (

      <div className="App">
        <div className="navbar" >
          <NavBar setSquadNumber={setSquadNumber} setHomeColors={setHomeColors} setAwayColors={setAwayColors} />
        </div>
        <Field param={pattern}></Field>
        {/*
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
