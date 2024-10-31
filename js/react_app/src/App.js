import React, { useState, useEffect } from 'react';
import ProductList from "./components/product/ProductList";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";

function App() {
  const [itemInfo, setItemInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setItemInfo(null);
  }, [searchTerm]);

  return (
    <div className="row g-0">
      <div className="row g-0 mb-3">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {itemInfo && <ItemCard itemInfo={itemInfo} />}
      <ProductList onChoice={(info) => setItemInfo(info)} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
