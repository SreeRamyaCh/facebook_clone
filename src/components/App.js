import React, { Component } from "react";
import FBBox from "./Bootstrap/FBBox";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
          <div className="col-6 offset-3">
            <FBBox>Hello</FBBox>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
