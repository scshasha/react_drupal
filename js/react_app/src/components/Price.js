import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Rating from "./Rating";

const targetCurrencies = [
  { rateCode: 'USD', countryCode: 'US' },
  { rateCode: 'EUR', countryCode: 'DE' },
  { rateCode: 'JPY', countryCode: 'JP' },
  { rateCode: 'GBP', countryCode: 'GB' },
  { rateCode: 'CHF', countryCode: 'CH' },
  { rateCode: 'CAD', countryCode: 'CA' },
  { rateCode: 'AUD', countryCode: 'AU' },
  { rateCode: 'NZD', countryCode: 'NZ' },
  { rateCode: 'ZAR', countryCode: 'ZA' },
  { rateCode: 'AED', countryCode: 'AE' },
];

export default ({ priceUSD, discountPercentage, itemInfo }) => {
  const [conversionRates, setConversionRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedPrice, setConvertedPrice] = useState(priceUSD);
  const [currencyFlags, setCurrencyFlags] = useState([]);
  const currencyApiUrl = process.env.CURRENCY_API_URL;
  const countryApiUrl = process.env.COUNTRY_API_URL;

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

        // Filter rates to include only those for target currencies
        const filteredRates = {};
        targetCurrencies.forEach(({ rateCode }) => {
          if (data.rates[rateCode]) {
            filteredRates[rateCode] = data.rates[rateCode];
          }
        });

        setConversionRates(filteredRates);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
    }
    fetchConversionRates();
  }, [currencyApiUrl]);

  // Fetch flags for the selected currencies
  const fetchCountryFlags = async () => {
    const currencyWithFlags = await Promise.all(targetCurrencies.map(async ({ countryCode, rateCode }) => {
      try {
        const Url = `${countryApiUrl}/alpha/${countryCode}?fields=name,currencies,cca2,flags`;
        const countryRes = await fetch(Url);
        const countryData = await countryRes.json();
        const flag = countryData?.flags?.svg || null;
        return { value: rateCode, label: rateCode, flag };
      } catch (countryError) {
        console.error(`Error fetching flag for ${countryCode}:`, countryError);
        return { value: rateCode, label: rateCode, flag: null };
      }
    }));

    return currencyWithFlags.filter(Boolean);
  };

  // Fetch country flags on component mount
  useEffect(() => {
    const fetchFlags = async () => {
      const flags = await fetchCountryFlags();
      setCurrencyFlags(flags);
    };
    fetchFlags();
  }, [countryApiUrl]);

  // Update the converted price whenever the currency changes
  useEffect(() => {
    if (selectedCurrency === 'USD') {
      setConvertedPrice(priceUSD);
    } else if (conversionRates[selectedCurrency]) {
      setConvertedPrice(priceUSD * conversionRates[selectedCurrency]);
    }
  }, [selectedCurrency, conversionRates, priceUSD]);

  // Helper function to format currency
  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const formattedDiscountedPrice = formatCurrency(convertedPrice, selectedCurrency);
  const formattedOriginalPrice = formatCurrency(addPercentage(convertedPrice, discountPercentage), selectedCurrency);

  return (
    <div className="row">
      <div className="col col-md-8">
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
      <div className="col col-md-4">
        <Select
          className="currency-select"
          value={currencyFlags.find(option => option.value === selectedCurrency)}
          onChange={(option) => setSelectedCurrency(option.value)}
          options={currencyFlags.map(({ value, label, flag }) => ({
            value,
            label: (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {label}
                {flag && <img src={flag} alt={`${label} flag`} style={{ width: '20px', marginLeft: '5px' }} />}
              </div>
            ),
          }))}
          placeholder="Select currency"
          isSearchable={false}
          getOptionLabel={(option) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {option.label}
              {option.flag && <img src={option.flag} alt={`${option.label} flag`} style={{ width: '20px', marginLeft: '5px' }} />}
            </div>
          )}
          getOptionValue={(option) => option.value}
        />
      </div>
    </div>
  );
};
