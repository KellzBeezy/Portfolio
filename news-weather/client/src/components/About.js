import React, { Component } from "react";

export default class About extends Component {
  render() {
    const team = { minHeight: "15em" };
    return (
      <div style={team}>
        <h1>ABOUT PAGE</h1>
        <p>
          This Site was designed by Kelvin Gwari in an effort to bring news and
          weather to one place.
        </p>
      </div>
    );
  }
}
