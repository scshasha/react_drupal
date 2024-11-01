import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Loader from '../Loader';
import NoResultsMessage from '../NoResultsMessage';
import LoadMoreButton from '../LoadMoreButton';

const ProductList = ({ onChoice, searchTerm, setItemsRef }) => {
  const display = 9;
  const productApiUrl = process.env.PRODUCT_API_URL;
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(display);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${productApiUrl}/search?q=${searchTerm}`);
        const data = await res.json();
        setProducts(data.products);
        setItemsRef(data.products);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [searchTerm, setItemsRef]);

  return (
    <div className="col-md-12">
      {loading ? <Loader /> : products.length === 0 ? <NoResultsMessage /> : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              products.slice(0, visibleCount).map((item, index) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onChoice={() => onChoice(item, index)}
                />
              ))
            }
          </div>

          {visibleCount < products.length && (
            <LoadMoreButton onClick={() => setVisibleCount(prev => prev + display)} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
