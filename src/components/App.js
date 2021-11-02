import { Component } from "react";
import Header from "./Bootstrap/Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Main from "./Main";

class App extends Component {
  state = {
    UserData: {
      FullName: "Sree Ramya",
      Avatar: "",
      ProfileURL: "/",
      Birthdays: [
        {
          FullName: "Datta Prasad",
          ProfileURL: "/"
        },
        {
          FullName: "Rama Krishna Rao",
          ProfileURL: "/"
        },
        {
          FullName: "SreeDevi",
          ProfileURL: "/"
        }
      ],
      Pages: [],
      NewsFeed: []
    },
    FeedData: []
  };
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
          <div className="row">
            <Sidebar />
            <Main />
            <Feed Birthdays={this.state.UserData.Birthdays} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
