import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Loader from '../Loader';
import NoResultsMessage from '../NoResultsMessage';
import LoadMoreButton from '../LoadMoreButton';

const ProductList = ({ onChoice, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(display);
  const [loading, setLoading] = useState(false);
  const display = 9;
  const productApiUrl = process.env.PRODUCT_API_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${productApiUrl}/search?q=${searchTerm}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setVisibleCount(display);
  }, [searchTerm]);

  return (
    <div className="col-md-12">
      {loading ? <Loader /> : products.length === 0 ? <NoResultsMessage /> : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.slice(0, visibleCount).map(item => (
              <ProductCard key={item.id} item={item} onChoice={onChoice} />
            ))}
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
