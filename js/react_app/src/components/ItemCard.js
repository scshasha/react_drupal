import React from 'react';
import Price from "./Price";

const ItemCard = ({ itemInfo }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={itemInfo.thumbnail}
            alt={itemInfo.title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{itemInfo.title}</h2>
            <p className="card-text">
              <small className="text-muted">{capitalizeFirstLetter(itemInfo.category)}</small>
            </p>
            <p className="card-text mb-md-3">{itemInfo.description}</p>
            <p className="card-text">
              <Price
                priceUSD={itemInfo.price}
                discountPercentage={itemInfo.discountPercentage}
                itemInfo={itemInfo}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
