import React, {useState, useEffect} from "react";

export default () => {
  const [product, setProduct] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products'); // Wait for the promise to resolve
      const data = await response.json(); // Wait for the promise to resolve and extract JSON data
      setProduct(data.products);
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
        product.map(member => (
          <div className="col">
            <div className="card">
              <a key={member.id} href="#" className="data-mdb-tooltip-init" title={member.title}>
                <img src={`${member.thumbnail}`} className="card-img-top" alt={member.title}/>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  )
}
