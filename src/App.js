import {useEffect, useState} from 'react';
import './App.css';
import Field from './field.jsx';
import circles from './circles.png';
import squares from './squares.png';
import lines from './lines.png';


function App() {

  const options = [
    {
      label: "Circles",
      value: "Circles",
    },
    {
      label: "Lines",
      value: "Lines",
    },
    {
      label: "Squares",
      value: "Squares",
    },
    
  ];
  const [pattern, setPattern] = useState("Circle"); 

  const handleSelect = (e) => {
    console.log(e.target.value)
    setPattern(e); 
    
  }
  
  const getImagePattern = () => {
    console.log(pattern , "param");

    switch (pattern) {
        case "Lines":
            return lines;
        case "Squares":
            return squares;
        case "Circles":
            return circles;
        default:  return circles;
    }
}


  return (
    <div className="App">
      <Field param={getImagePattern()}></Field>
      <select  onChange={handleSelect}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

    </div>
  );
}

export default App;
