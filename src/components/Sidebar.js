import React, { Fragment } from "react";
import SidebarUserMeta from "./SidebarUserMeta";

const sidebar = ({ ContentList, UserMeta }) => {
  return (
    <div className="Sidebar col-2">
      <SidebarUserMeta {...UserMeta} />
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
