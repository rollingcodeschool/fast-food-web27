import { useEffect, useState } from "react";
import CardFastFood from "./CardFastFood";

const FastFoodApp = () => {
  const [fastFood, setfFastFood] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   //acciones a realizar
  //   console.log("Bienvenido componente!!");
  //   return () => {
  //     //Acciones que suceden cuando se desmonta el componente
  //     console.log('Se desmontó el componente :(')
  //   };
  // }, []);

  useEffect(() => {
    //controlar la petición a la api si se cancela
    const controller = new AbortController();
    const signal = controller.signal;

    const getFastFood = async () => {
      try {
        const response = await fetch("https://devsapihub.com/api-fast-food", {
          signal,
        });
        const data = await response.json();
        // return data;
        setfFastFood(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFastFood();

    return () => {
      console.log("Componente desmontado");
      //cortar o aboratr petición a la API si se desmonta el componente.
      controller.abort();
    };
  }, []); //cuando esta vacio el array de dependencias se ejecuta una vez al montar el componente

  return (
    <>
      {fastFood.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
          {fastFood.map((food) => (
            <CardFastFood food={food} key={food.id} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-3">
          <h3>Cargando...</h3>
        </div>
      )}
    </>
  );
};

export default FastFoodApp;
