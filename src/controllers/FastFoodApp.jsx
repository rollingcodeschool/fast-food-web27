import React, { useEffect, useState } from "react";

const FastFoodApp = () => {
      const [loading, setLoading] = useState(false);
  const [fastFood, setFastFood] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    const getFastFood = async () => {
     
      try {
        const response = await fetch("https://devsapihub.com/api-fast-food",{signal});
        console.log(response)
        const data = await response.json();
  
        setFastFood(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFastFood()
    return () => {
      controller.abort();
    };

  }, []);
  return (
    <div>FastFoodApp</div>
  )
}

export default FastFoodApp