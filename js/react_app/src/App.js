import React, { useState } from 'react';
import List from "./components/List";
import PriceDisplay from "./components/PriceDisplay";

function App() {
  const [itemInfo, setItemInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="row g-0">
      {
        // Single item, display card
        itemInfo &&
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={itemInfo.thumbnail}
                alt={itemInfo.title}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{itemInfo.title}</h2>
                <p className="card-text mb-md-2">{itemInfo.description}</p>
                <div className="clear-fix mb-3"></div>
                <p className="card-text"><strong>{capitalizeFirstLetter(itemInfo.category)}</strong></p>
                <p className="card-text">
                  <small className="text-muted">
                    <PriceDisplay
                      priceUSD={itemInfo.price}
                      discountPercentage={itemInfo.discountPercentage}
                      itemInfo={itemInfo}
                    />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      {/*// Search form*/}
      <div className="row g-0 mb-3">
        <div className="col-12 mb-3">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {/*// The list*/}
        <List onChoice={(info) => setItemInfo(info)} searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default App;
