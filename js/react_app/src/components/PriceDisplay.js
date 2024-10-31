import React, { useEffect, useState } from 'react';
import StarRating from "./StarRating";

export default ({ priceUSD, discountPercentage, itemInfo }) => {
  // console.log(ratingId, ratingValue, itemInfo);
  const [conversionRates, setConversionRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedPrice, setConvertedPrice] = useState(priceUSD);

  // Fetch conversion rates on component mount
  useEffect(() => {
    async function fetchConversionRates() {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/USD`);
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
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: selectedCurrency,
  }).format(convertedPrice);

  return (
    <>
      <div className="input-group mb-3">
        <select
          className="custom-select"
          id="currency-select"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {Object.keys(conversionRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <StarRating
        key={itemInfo.id} // Ensures StarRating re-renders with new item
        totalStars={5}
        initialRating={itemInfo.rating}
        activeColor="orange"
        inactiveColor="lightgray"
      />
      <small className="text-muted"><strong>{formattedPrice}</strong>&nbsp;(<s>{discountPercentage}&nbsp;%</s>)</small>
    </>
  );
}
