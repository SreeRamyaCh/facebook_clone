import { Component } from "react";
import Header from "./Bootstrap/Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
          <div className="row">
            <Sidebar />
            <Main />
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
