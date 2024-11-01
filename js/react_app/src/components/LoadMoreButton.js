import React from 'react';

const LoadMoreButton = ({ onClick }) => (
  <div className="text-center mt-auto mt-md-4">
      <button type="button " className="btn btn-light" onClick={onClick} data-mdb-ripple-init>
        Load More
      </button>
  </div>
);

export default LoadMoreButton;
