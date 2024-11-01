import React, { useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded ? (
    <img src={src} alt={alt} className="card-img-top" />
  ) : (
    <div style={{ height: '200px', backgroundColor: '#f0f0f0' }} />
  );
};

export default LazyImage;
