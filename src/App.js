import { useState } from "react";
import "./App.css";
import Field from "./components/field/field";
import Player from "./components/players/player";

function App() {
  const [pattern, setPattern] = useState("Circle");
  return (
    <div className="App">
      <Field param={pattern}></Field>
      <select className="patternSelector" onChange={(e) => setPattern(e.target.value)}>
        <option selected disabled value="">Selecciona la patron</option>
        <option value="Circles">Circulos</option>
        <option value="Lines">Lineas</option>
        <option value="Squares">Cuadrados</option>
      </select>

      <Player/>
    </div>
  );
}

export default App;
