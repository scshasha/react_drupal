import React, { useState } from 'react';
import List from "./components/List";
import PriceDisplay from "./components/PriceDisplay";
import StarRating from "./components/StarRating";

function App() {
  const [itemInfo, setItemInfo] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container">
      <div className="row g-0">
        {
          itemInfo &&
          // <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="card mb-12">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={itemInfo.images[0]}
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
        <List onChoice={(info) => setItemInfo(info)} />
      </div>
    </div>
  );
}

export default App;
