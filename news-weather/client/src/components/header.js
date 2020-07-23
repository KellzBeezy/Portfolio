import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

export default class header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="App-title">
          <strong><em>BEEZYAPP!!</em></strong> 
          </h4>
          <div className="head">
            <li className="is-active">
              <Link to="/" replace>
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" replace>
                News
              </Link>
            </li>
            <li>
              <Link to="/sport" replace>
                Sports
              </Link>
            </li>
            <li>
              <Link to="/about" replace>
                About
              </Link>
            </li>
            <li className="is-active">
              <a href="https://beezychat.herokuapp.com">
                BeezyChat
              </a>
            </li>
          </div>
        </header>
      </div>
    );
  }
}
