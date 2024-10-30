import React, { Component } from 'react';
import Default from './components/Default';
import CallToAction from "./components/CallToAction";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="card">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://dummyjson.com/image/700x300/333333/eae0d0" className="img-fluid"/>
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15);' }}></div>
          </a>
        </div>
        <div className="card-body">
          <Default title="React + Drupal" classStyles="card-title"/>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <CallToAction />
        </div>
      </div>
      <div className="row g-0">
        <List/>
      </div>
    </>
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

