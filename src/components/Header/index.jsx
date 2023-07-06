import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
// import Aside from "../Aside.jsx";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="containers header">
      
         
          <nav>
            <img src="/yotobeicon.svg" alt="" />

            <Form className="d-flex w-50 ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">
                <img src="/search.svg" alt="" />
              </Button>
            </Form>
            <div className="imgs_navigation d-flex gap-2">
              <img src="/meet.svg" alt="logo" />
              <img src="/call.svg" alt="logo" />
            </div>
          </nav>

          <div className="line"></div>

          <ul className="list">
            <li className="list-title">
              <NavLink to="all" className="link">All</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="gaming" className="link">Gaming</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="barcelona" className="link">FC Barcelona</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="apple" className="link">Apple</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="sports" className="link">Sports leagues</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="interface" className="link">User interface design</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="music" className="link">Music</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="mixes" className="link">Mixes</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="live" className="link">Live</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="footbal" className="link">EFootball</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="editing" className="link">Editing</NavLink>
            </li>
            <li className="list-title">
              <NavLink to="game" className="link">Game shows</NavLink>
            </li>
          </ul>
       
      </div>
    );
  }
}

export default Header;
