import React, { Component } from 'react';
import Default from './components/Default';
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="card mb-3" style={{ width: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://dummyjson.com/image/500"
            style={{ maxWidth: '100%' }}
            alt="DummyJson"
            className="card-img-top"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Default title="React + Drupal" classStyles="card-title"/>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.moduleName = 'React + Drupal';
//   }
//
//   handleBtnClick = () => {
//     alert("Hello World!")
//   };
//   render() {
//     return
//   }
// }

