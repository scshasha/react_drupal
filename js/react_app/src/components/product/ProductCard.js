import React, { useState } from 'react';
import './ProductCard.css'; // Assuming you add styling for the blur effect

const ProductCard = ({ item, onChoice }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="col">
      <div className="card">
        <a onClick={() => onChoice(item)} title={item.title}>
          <img
            src={`${item.images[0]}?low-res=true`} // Fetch low-res version
            alt={item.title}
            className={`card-img-top ${isLoaded ? '' : 'blurred'}`}
            style={{ display: isLoaded ? 'none' : 'block' }}
          />
          <img
            src={item.thumbnail}
            alt={item.title}
            className="card-img-top"
            onLoad={() => setIsLoaded(true)}
            style={{ display: isLoaded ? 'block' : 'none' }}
          />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
