import { useState } from "react";
import "./App.css";
import Field from "./field.jsx";

function App() {
  const [pattern, setPattern] = useState("Circle");

  return (
    <div className="App">
      <Field param={pattern}></Field>
      <select onChange={(e) => setPattern(e.target.value)}>
        <option disabled>Selecciona la decoracion</option>
        <option value="Circles">Circulos</option>
        <option value="Lines">Lineas</option>
        <option value="Squares">Cuadrados</option>
      </select>
      <div></div>
    </div>
  );
}

export default App;
