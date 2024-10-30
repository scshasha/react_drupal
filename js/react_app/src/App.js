import React from 'react';
import { render} from "react-dom";

const App = () => {
  return (
    <>
      <h2>My React App Block</h2>
      <p>This is output from a react application within a drupal module.</p>
    </>
  )
}

render(<App/>, document.querySelector('#react-app-block'));
