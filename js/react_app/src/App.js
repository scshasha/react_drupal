import React from 'react';
import { render} from "react-dom";

const moduleName = "React + Drupal";
const App = () => {
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="https://dummyjson.com/image/500x200" alt="Dummy Json"/>
          <h1>This is a {moduleName} module build</h1>
          <p>This is output from a react application within a drupal module.</p>
        </hgroup>
      </article>
    </div>
  )
}

render(<App/>, document.querySelector('#react-app-block'));
