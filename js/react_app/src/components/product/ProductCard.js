import React from 'react';
import LazyLoad from 'react-lazyload';

const ProductCard = ({ item, onChoice }) => (
  <div className="col">
    <div className="card">
      <a onClick={() => onChoice(item)} title={item.title}>
        <LazyLoad height={200} offset={100} once>
          <img src={item.thumbnail} alt={item.title} className="card-img-top" />
        </LazyLoad>
      </a>
    </div>
  </div>
);

export default ProductCard;
