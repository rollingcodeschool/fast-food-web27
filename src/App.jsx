import FastFoodApp from './controllers/FastFoodApp'
import {useState} from 'react'
const App = () => {
 const [show, setShow] = useState(false)

  return (
    <div>
      <h1>FastFood</h1>
      <button onClick={()=>setShow(!show)}>{show ?'Cerrar':'Abrir'}</button>
      {
        show && <FastFoodApp />
      }
   
      </div>
  );
};

export default App;
