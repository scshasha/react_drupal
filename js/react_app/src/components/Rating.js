import React, { useState } from 'react';

export default ({ totalStars = 5, initialRating = 0, activeColor = '#FFD700', inactiveColor = 'lightgray' }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div className="text-align-left">
        {[...Array(totalStars)].map((_, index) => {
          const value = index + 1;
          return (
            <i
              key={value}
              className="fas fa-star"
              style={{
                color: value <= (hover || rating) ? activeColor : inactiveColor,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => setRating(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
            ></i>
          );
        })}
      </div>
    </>
  );
}
