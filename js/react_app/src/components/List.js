import React, {useState, useEffect} from "react";

export default ({ onChoice }) => {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products'); // Wait for the promise to resolve
      const data = await response.json(); // Wait for the promise to resolve and extract JSON data
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error); // Handle any errors
    }
  }

// Calling the async function

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        products.map(item => (
          <div className="col">
            <div className="card">
              <a onClick={ () => {onChoice(item)}} key={item.id} className="data-mdb-tooltip-init" title={item.title}>
                <img src={item.thumbnail} className="card-img-top" alt={item.title}/>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  )
}
