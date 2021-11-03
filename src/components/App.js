import { Component } from "react";
import { GetWallData, GetUserData } from "../services/UserData";
import Header from "./Bootstrap/Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Main from "./Main";

class App extends Component {
  state = {
    UserData: null,
    WallData: []
  };
  componentDidMount() {
    GetUserData().then(({ data: UserData }) => this.setState({ UserData }));
    GetWallData().then(({ data: WallData }) => this.setState({ WallData }));
  }
  render() {
    return (
      <div className="App">
        <Header
          className="Header"
          UserMeta={this.state.UserData && this.state.UserData.UserMeta}
        >
          Facebook Clone
        </Header>
        {this.state.UserData ? (
          <div className="container">
            <div className="row">
              <Sidebar
                ContentList={this.state.UserData.ContentList}
                UserMeta={this.state.UserData.UserMeta}
              />
              <Main FeedData={this.state.UserData.FeedData} />
              <Feed
                Birthdays={this.state.UserData.Birthdays}
                Pages={this.state.UserData.Pages}
                NewsFeeds={this.state.UserData.NewsFeeds}
              />
            </div>
          </div>
        ) : (
          "Login Screen"
        )}
      </div>
    );
  }
}

export default App;
