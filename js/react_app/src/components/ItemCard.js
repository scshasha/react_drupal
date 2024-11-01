import React from 'react';
import Price from "./Price";
import button from "bootstrap/js/src/button";

const ItemCard = ({ itemInfo, onNext, onPrevious, hasNext, hasPrevious }) => {
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
            <div className="btn-group shadow-0 mt-3" role="group">
              <button type="button " className="btn btn-light me-2" onClick={onPrevious} disabled={!hasPrevious} data-mdb-ripple-init>
                {`<< previous`}
              </button>
              <button type="button " className="btn btn-light" onClick={onNext} disabled={!hasNext} data-mdb-ripple-init>
                {`next >>`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
