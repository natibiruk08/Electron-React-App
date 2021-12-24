import "./App.css";
import { useState } from "react";
import { calculateMinimumRebarNeeded } from "./calculation";

function App() {
  const [length1, setLength1] = useState(null);
  const [quantity1, setQuantity1] = useState(null);
  const [length2, setLength2] = useState(null);
  const [quantity2, setQuantity2] = useState(null);
  const [result, setResult] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setResult(
      calculateMinimumRebarNeeded(length1, quantity1, length2, quantity2)
    );
    setLength1("");
    setQuantity1("");
    setLength2("");
    setQuantity2("");
  };

  return (
    <div className="App">
      <form onSubmit={(event) => onSubmit(event)}>
        <br />
        <h2>Length 1</h2>
        <input
          type="number"
          required
          value={length1}
          onChange={(e) => setLength1(e.target.value)}
        />
        <br /> <br /> <br />
        <h2>Quantity 1</h2>
        <input
          type="number"
          required
          value={quantity1}
          onChange={(e) => setQuantity1(e.target.value)}
        />
        <br /> <br /> <br />
        <h2>Length 2</h2>
        <input
          type="number"
          required
          value={length2}
          onChange={(e) => setLength2(e.target.value)}
        />
        <br /> <br /> <br />
        <h2>Quantity 2</h2>
        <input
          type="number"
          required
          value={quantity2}
          onChange={(e) => setQuantity2(e.target.value)}
        />
        <br /> <br /> <br />
        <button type="submit">Calculate</button>
        <h2>Result :{result} </h2>
      </form>
    </div>
  );
}

export default App;
