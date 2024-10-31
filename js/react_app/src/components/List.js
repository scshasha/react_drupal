import React, { useState, useEffect } from "react";

export default ({ onChoice, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  async function fetchData() {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="col-md-12">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          products.slice(0, visibleCount).map(item => (
            <div className="col" key={item.id}>
              <div className="card">
                <a onClick={() => onChoice(item)} className="data-mdb-tooltip-init" title={item.title}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="card-img-top"
                  />
                </a>
              </div>
            </div>
          ))
        }
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
    </div>
  );
};
