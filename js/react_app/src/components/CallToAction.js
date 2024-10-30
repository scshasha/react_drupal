import React, { useState, useEffect } from "react";

const pageTitle = document.title;

export default () => {
  const styles  = 'btn btn-primary me-2';
  const [count, setCount] = useState(0);

  useEffect(() => {
      count && (document.title = `${pageTitle} - Current Count is ${count}`);
  });
  return (
    <>
      <button onClick={()=>{setCount(count+1)}} type="button" className={`${styles}`} data-mdb-ripple-init>
        {count === 0 ? "Click to start counting." : `Current count is ${count}`}
      </button>
      <button onClick={()=>{setCount(0)}} type="button" className={`${styles} btn-danger`} data-mdb-ripple-init disabled={count === 0}>
        Reset
      </button>
    </>
  );
}
