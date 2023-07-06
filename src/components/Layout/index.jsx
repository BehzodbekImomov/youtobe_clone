import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../Aside.jsx";

import Header from "../Header";

import "./Layout.scss";

export class Layout extends Component {
  render() {
    return (
      <div className="containers">
        <header>
          <Header />
        </header>
        <aside>
          <Aside />
        </aside>
        
          <main className="container">
            <Outlet />
         
          </main>
     
      </div>
    );
  }
}

export default Layout;
