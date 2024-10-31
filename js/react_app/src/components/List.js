import React, { useState, useEffect } from "react";

export default ({ onChoice, searchTerm }) => {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      // Use the searchTerm in the API call
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call fetchData whenever searchTerm changes
  useEffect(() => {
    fetchData();
  }, [searchTerm]); // Dependency array includes searchTerm

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        products.map(item => (
          <div className="col" key={item.id}> {/* Moved key here for the outer div */}
            <div className="card">
              <a onClick={() => { onChoice(item) }} className="data-mdb-tooltip-init" title={item.title}>
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};
