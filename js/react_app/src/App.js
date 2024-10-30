import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moduleName = 'React + Drupal';
  }

  handleBtnClick = () => {
    alert("Hello World!")
  };
  render() {
    return (
      <div className="container">
        <article>
          <hgroup>
            <img
              src="https://dummyjson.com/image/500x200"
              style={{ maxWidth: '100%' }}
              alt="Dummy Json"
            />
            <h1>{this.moduleName}</h1>
            <p>Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
            <button className="outline button" onClick={this.handleBtnClick}>
              Do something!
            </button>
          </hgroup>
        </article>
      </div>
    )
  }
}

// render(<App />, document.querySelector('#react-app-block'));
export default App;

// render(<App/>, document.querySelector('#react-app-block'));
// export default class App {
// }
