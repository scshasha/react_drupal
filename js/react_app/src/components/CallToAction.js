import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  // const btnStyles  = "outline button-small button";
  const styles  = 'btn btn-primary me-2';
  return (
    <>
      <button onClick={()=>{setCount(count+1)}} type="button" className={styles} data-mdb-ripple-init>
        Count is { count }!
      </button>
      <button onClick={()=>{setCount(0)}} type="button" className={styles + ' btn-danger'} data-mdb-ripple-init>
        Reset
      </button>
    </>
  );
}
