import React from "react";
import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
