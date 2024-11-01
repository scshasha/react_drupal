import React, { useState, useEffect, useRef } from 'react';
import ProductList from "./components/product/ProductList";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";

function App() {
  const [itemInfo, setItemInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const topRef = useRef(null); // Reference for scrolling to the top
  const itemsRef = useRef([]);

  // Reset itemInfo and scroll to the top when searchTerm changes
  useEffect(() => {
    setItemInfo(null);
    setCurrentIndex(0);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

  // Scroll to the ItemCard area when a new item is selected
  const handleItemSelect = (info, index) => {
    setItemInfo(info);
    setCurrentIndex(index)
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle next button.
  const handleNext = () => {
    if (currentIndex < itemsRef.current.length -1) {
      const nextIndex = currentIndex + 1;
      setItemInfo(itemsRef.current[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };
  // Handle previous button.
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setItemInfo(itemsRef.current[prevIndex])
    }
  };

  return (
    <div className="row g-0" ref={topRef}>
      <div className="row g-0 mb-3">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {itemInfo && (
        <ItemCard
          itemInfo={itemInfo}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={currentIndex < itemsRef.current.length - 1}
          hasPrevious={currentIndex > 0}
        />
      )}
      <ProductList
        onChoice={(info, index) => handleItemSelect(info, index)}
        searchTerm={searchTerm}
        setItemsRef={(items) => (itemsRef.current = items)}
      />
    </div>
  );
}

export default App;
