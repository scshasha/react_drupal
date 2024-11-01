import React, { useEffect, useState } from 'react';
import Rating from "./Rating";

export default ({ priceUSD, discountPercentage, itemInfo }) => {
  const [conversionRates, setConversionRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedPrice, setConvertedPrice] = useState(priceUSD);
  const currencyApiUrl = process.env.CURRENCY_API_URL;

  function addPercentage(amount, percentage) {
    const newAmount = amount * (1 + percentage / 100);
    return parseFloat(newAmount.toFixed(2));
  }

  // Fetch conversion rates on component mount
  useEffect(() => {
    async function fetchConversionRates() {
      try {
        const response = await fetch(`${currencyApiUrl}`);
        const data = await response.json();
        setConversionRates(data.rates);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
    }
    fetchConversionRates();
  }, []);

  // Update the converted price whenever the currency changes
  useEffect(() => {
    if (selectedCurrency === 'USD') {
      setConvertedPrice(priceUSD);
    } else if (conversionRates[selectedCurrency]) {
      setConvertedPrice(priceUSD * conversionRates[selectedCurrency]);
    }
  }, [selectedCurrency, conversionRates, priceUSD]);

  // Format price based on the selected currency
  const formattedDiscountedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: selectedCurrency,
  }).format(convertedPrice);
  const formattedOriginalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: selectedCurrency,
  }).format(addPercentage(convertedPrice, discountPercentage));

  return (
    <div className="row">
      <div className="col col-md-9">
        <Rating
          key={itemInfo.id}
          totalStars={5}
          initialRating={itemInfo.rating}
          activeColor="orange"
          inactiveColor="lightgray"
          reviewCount={itemInfo.reviews.length}
        />
        <div className="text-muted mb-md-2">
          <span className="text-decoration-line-through">{formattedOriginalPrice}</span>
          {'\u00A0'}
          <span className="primary text-primary">{formattedDiscountedPrice}</span>
        </div>
      </div>
      <div className="col col-md-3">
        <select
          className="custom-select"
          id="currency-select"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          {Object.keys(conversionRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
