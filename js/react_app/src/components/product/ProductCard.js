import React, { Suspense } from 'react';
import LazyImage from "../LazyImage";

const ProductCard = ({ item, onChoice }) => (
  <div className="col">
    <div className="card">
      <a onClick={() => onChoice(item)} title={item.title}>
        <Suspense fallback={<div style={{ height: '200px', backgroundColor: '#f0f0f0' }} />}>
          <LazyImage src={item.thumbnail} alt={item.title} />
        </Suspense>
      </a>
    </div>
  </div>
);

export default ProductCard;
