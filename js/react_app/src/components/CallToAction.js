import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  // const btnStyles  = "outline button-small button";
  const styles  = 'btn btn-primary me-2';
  return (
    <>
      <button onClick={()=>{setCount(count+1)}} type="button" className={`${styles}`} data-mdb-ripple-init>
        {(() => {
          if (count === 0) {
            return "Click to start counting!";
          }
          else {
            return `Current count is ${count}`;
          }
        })()}
      </button>
      <button onClick={()=>{setCount(0)}} type="button" className={`${styles} btn-danger`} data-mdb-ripple-init disabled={count === 0}>
        Reset
      </button>
    </>
  );
}
