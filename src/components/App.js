import { Component } from "react";
import Header from "./Bootstrap/Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Main from "./Main";

class App extends Component {
  state = {
    UserData: {
      UserMeta: {
        FullName: "Sree Ramya",
        Avatar: "https://i.imgur.com/Zv2PKvEb.jpg",
        ProfileURL: "/"
      },

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
      Pages: [
        {
          Avatar: "https://i.imgur.com/SrTKlVe.png",
          PageURL: "/",
          Name: "Edusera",
          MessageCount: "20+",
          NotificationCount: "20+"
        },
        {
          Avatar: "https://i.imgur.com/QDBSMr2b.jpg",
          PageURL: "/",
          Name: "Zucku Mama",
          MessageCount: "15",
          NotificationCount: "15"
        }
      ],
      NewsFeeds: [
        {
          Image: "https://i.imgur.com/nOT5zBD.jpeg",
          NewsLink: "/",
          Title: "Hello Kittens!!",
          DateTime: "12th Sunday September 2021",
          DatePosted: "Today"
        },
        {
          Image: "https://i.imgur.com/BipVIkJ.jpeg",
          NewsLink: "/",
          Title: "Best Cat Pic",
          DateTime: "12th Sunday September 2021",
          DatePosted: "yesterday"
        },
        {
          Image: "https://i.imgur.com/ZM5xWH9.jpeg",
          NewsLink: "/",
          Title: "Some cat Cute Stuff",
          DateTime: "12th Sunday September 2021",
          DatePosted: "2days ago"
        }
      ],
      ContentList: {
        Default: [
          {
            Link: "/",
            Icon: "news",
            Text: "News Feed"
          },
          {
            Link: "/",
            Icon: "chat",
            Text: "Messager"
          },
          {
            Link: "/",
            Icon: "watch",
            Text: "Watch"
          },
          {
            Link: "/",
            Icon: "market",
            Text: "Marketplae"
          }
        ],
        Shortcuts: [
          {
            Link: "/",
            Icon: "web",
            Text: "Personal Website"
          }
        ],
        Explorer: [
          {
            Link: "/",
            Icon: "yt",
            Text: "Youtube Channel"
          }
        ]
      }
    },
    FeedData: []
  };
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
              <Main />
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
