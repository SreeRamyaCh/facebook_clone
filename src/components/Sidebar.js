import React, { Fragment } from "react";

const sidebar = () => {
  const ContentList = {
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
  };
  return (
    <div className="Sidebar col-2">
      <div className="UserMeta">
        <a href="/">
          <img src="https://i.imgur.com/Zv2PKvEb.jpg" alt="Ramya" />
          Ramya
        </a>
      </div>
      {Object.keys(ContentList).map(section => (
        <Fragment key={section}>
          {section !== "Default" && <h3>{section}</h3>}
          <ul className="Sidebar-Links">
            {ContentList[section].map(link => (
              <li key={link.Icon}>
                <a href={link.Link}>
                  <span className={"Sprite-" + link.Icon} />
                  {link.Text}
                </a>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default sidebar;
