import React, { useEffect, useState, useRef} from 'react';

// const ProductCard = ({ item, onChoice }) => (
//   <div className="col">
//     <div className="card">
//       <a onClick={() => onChoice(item)} title={item.title}>
//         <LazyLoad height={200} offset={100} once>
//           <img src={item.thumbnail} alt={item.title} className="card-img-top" />
//         </LazyLoad>
//       </a>
//     </div>
//   </div>
// );
const ProductCard = ({ item, onChoice }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '100%' }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="col">
      <div className="card">
        <a onClick={() => onChoice(item)} title={item.title}>
          <div ref={imgRef} style={{backgroundColor: '#f0f0f0'}}>
            {isVisible && <img src={item.thumbnail} alt={item.title} className="card-img-top"/>}
          </div>
        </a>
      </div>
    </div>
  );
};
export default ProductCard;
