const CardFastFood = (props) => {
  const { food } = props;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={food.image} className="card-img-top" alt={food.name} />
        <div className="card-body">
          <h5 className="card-title">{food.name}</h5>
          <p className="card-text fs-4 text-end">${food.price}</p>
          <span className="badge rounded-pill text-bg-warning">
            {food.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFastFood;
