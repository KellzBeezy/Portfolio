import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

export default class header extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h4 className="App-title">
              Welcome To the Development Site Of the Coolest App In Town!!
            </h4>
            <div className="head">
              <li className="is-active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/sport">Sports</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
