import React, { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';

export default ({ onChoice, searchTerm }) => {
  const display = 9;
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(display);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    setVisibleCount(display); // Reset the visible count with each new search
  }, [searchTerm]);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + display);
  };

  return (
    <div className="col-md-12">
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.slice(0, visibleCount).map(item => (
              <div className="col" key={item.id}>
                <div className="card">
                  <a onClick={() => onChoice(item)} className="data-mdb-tooltip-init" title={item.title}>
                    <LazyLoad height={200} offset={100} once>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="card-img-top"
                      />
                    </LazyLoad>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < products.length && (
            <div className="text-center mt-3">
              <button
                onClick={loadMore}
                className="btn btn-lg"
                style={{
                  color: '#eaeaea',
                  background: '#4c7f8b',
                  cursor: 'pointer',
                }}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
