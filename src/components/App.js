import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
          <div className="col-6 offset-3">
            <div className="fb-box">I am FB Box</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
