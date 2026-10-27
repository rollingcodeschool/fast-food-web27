import React, { useEffect, useState } from "react";
import CardFastFood from "./CardFastFood";

const FastFoodApp = () => {
  const [loading, setLoading] = useState(true);
  const [fastFood, setFastFood] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // setLoading(true);
    const getFastFood = async () => {
      try {
        const response = await fetch("https://devsapihub.com/api-fast-food", {
          signal,
        });
        // console.log(response);
        const data = await response.json();

        setFastFood(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFastFood();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {fastFood.length === 0 && (
        <div className="row">
          <div className="col text-center">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <div className="row mt-5 row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {fastFood.map((food) => (
          <CardFastFood food={food} key={food.id} />
        ))}
      </div>
    </>
  );
};

export default FastFoodApp;
