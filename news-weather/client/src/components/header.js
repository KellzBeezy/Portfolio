import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./rea.ico";

export default class header extends Component {
  render() {
    const style = { color: "gold" };
    return (
      <div>
        <header className="App-header">
          <div className="col-lg-2">
            <img src={Banner} width="100px" alt="" />
          </div>

          <h1 className="App-title " style={style}>
            <strong>
              <em>APPBEEZY!!</em>
            </strong>
          </h1>
          <div className="head">
            <li className="is-active">
              <Link to="/news" replace>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tech" replace>
                Technology
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
          </div>
        </header>
      </div>
    );
  }
}
