import React, { useState, useEffect } from 'react';

export default ({ totalStars = 5, initialRating = 0, activeColor = '#FFD700', inactiveColor = 'lightgray', reviewCount }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const [reviewers, setReviewers] = useState(reviewCount);

  useEffect(() => {
    setReviewers(reviewCount);
  }, [reviewCount]);

  return (
    <>
      <div className="text-align-left mb-md-2">
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
                marginRight: '.2rem'
              }}
              onClick={() => setRating(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
            ></i>
          );
        })}
        <span
          style={{
            marginLeft: '.5rem',
            fontWeight: '600',
            opacity: '.5'
          }}>
          {(reviewers === 1 ? `${reviewers} review` : `${reviewers} reviews`)}
        </span>
      </div>
    </>
  );
}
