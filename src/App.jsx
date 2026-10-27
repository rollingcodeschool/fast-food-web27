import FastFoodApp from "./components/FastFoodApp";
import { useState } from "react";
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>FastFood</h1>
          <button className="btn btn-success" onClick={() => setShow(!show)}>
            {show ? "Cerrar" : "Abrir"}
          </button>
        </div>
      </div>
      {show && <FastFoodApp />}
    </div>
  );
};

export default App;
