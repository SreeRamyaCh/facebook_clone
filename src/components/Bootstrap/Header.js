import React from "react";
import HeaderUserMeta from "../HeaderUserMeta";

const header = ({ dark, children, className, UserMeta }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
      }
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/logo512.png" alt={children + "Logo"} className="me-2" />
          {children}
        </a>
        {UserMeta && <HeaderUserMeta {...UserMeta} />}
      </div>
    </nav>
  );
};

export default header;
