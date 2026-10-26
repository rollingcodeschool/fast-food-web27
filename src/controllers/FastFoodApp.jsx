import { useEffect, useState } from "react";

const FastFoodApp = () => {
  const [fastFood, setfFastFood] = useState([])
  // useEffect(() => {
  //   //acciones a realizar
  //   console.log("Bienvenido componente!!");
  //   return () => {
  //     //Acciones que suceden cuando se desmonta el componente
  //     console.log('Se desmontó el componente :(')
  //   };
  // }, []);

  useEffect(() => {
    const getFastFood = async () => {
      try {
        const response = await fetch("https://devsapihub.com/api-fast-food");
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };

getFastFood().then((respuesta)=>setfFastFood(respuesta))

    // return () => {
    //   second
    // }
  }, []);

  return <div>FastFoodApp</div>;
};

export default FastFoodApp;
