import React from "react";

const CardFastFood = ({ food }) => {
  const { name, price, image, category } = food;
  return (
    <div className="col">
      <section className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text text-end fs-4">${price}</p>
          <span class="badge rounded-pill text-bg-warning">{category}</span>
        </div>
      </section>
    </div>
  );
};

export default CardFastFood;
