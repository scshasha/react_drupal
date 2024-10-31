import React from 'react';

const LoadMoreButton = ({ onClick }) => (
  <div className="text-center mt-3">
    <button onClick={onClick} className="btn btn-lg" style={{ color: '#eaeaea', background: '#4c7f8b' }}>
      Load More
    </button>
  </div>
);

export default LoadMoreButton;
