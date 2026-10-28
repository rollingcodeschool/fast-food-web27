import FastFoodApp from "./components/FastFoodApp";
import { useState } from "react";
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>FastFood</h1>
          <button className="btn btn-success" onClick={() => setShow(!show)}>
            {show ? "Cerrar" : "Abrir"}
          </button>
          {show && <FastFoodApp />}
        </div>
      </div>
    </div>
  );
};

export default App;
