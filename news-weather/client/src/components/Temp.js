import React, { Component } from "react";
import axios from "axios";

class Temp extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      low: "",
      max: "",
      feel: "",
      description: "",
      Load: true
    };
  }
  componentDidMount() {
    axios.get("/weather").then(res => {
      this.setState({
        temp: res.data.temp,
        low: res.data.low,
        max: res.data.max,
        feel: res.data.feel,
        description: res.data.description,
        Load: false
      });
    });
  }

  render() {
    return (
      <div>
        <h3>The weather Forecast!</h3>

        <h4>The weather is brought to you by the open weather channel</h4>

        <h5>The weather in Lefke Today</h5>
        <div>
          {this.state.Load ? (
            <h6 className="container">Loading...</h6>
          ) : (
            <p>
              {" "}
              Temperature: {this.state.temp}
              <sup>o</sup>C<br />
              Feels like: {this.state.feel}
              <sup>o</sup>C<br />
              {this.state.max}
              <sup>o</sup>C /{this.state.low}
              <sup>o</sup>C<h6>{this.state.description}</h6>
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default Temp;
