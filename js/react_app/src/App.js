import React, { useState, useEffect, useRef } from 'react';
import ProductList from "./components/product/ProductList";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";

function App() {
  const [itemInfo, setItemInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const topRef = useRef(null); // Reference for scrolling to the top

  // Reset itemInfo and scroll to the top when searchTerm changes
  useEffect(() => {
    setItemInfo(null);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

  // Scroll to the ItemCard area when a new item is selected
  const handleItemSelect = (info) => {
    setItemInfo(info);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="row g-0" ref={topRef}>
      {/* Display the SearchBar */}
      <div className="row g-0 mb-3">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {/* Display the ItemCard if an item is selected */}
      {itemInfo && <ItemCard itemInfo={itemInfo} />}
      {/* Display the ProductList */}
      <ProductList onChoice={handleItemSelect} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
