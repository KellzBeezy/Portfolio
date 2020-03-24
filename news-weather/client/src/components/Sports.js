import React, { Component } from "react";
import ShowSport from "./showSport.js";
import axios from "axios";
import logo from "./load.svg";
import rea from "./rea.ico";

class Sport extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      Load: true
    };
  }

  componentDidMount() {
    axios.get("/sport").then(res => {
      this.setState({
        arr: res.data,
        Load: false
      });
      //console.log(this.state.arr);
    });
  }

  render() {
    return (
      <div>
        {this.state.Load ? (
          <h6 className="container">
            <br />
            <br />
            LOADING...
            <br />
            <br />
            <img src={rea} className="icon" alt=""></img>
          </h6>
        ) : (
          this.state.arr.map(news => (
            <ShowSport
              key={news.Id}
              headline={news.headline}
              content={news.content}
              linkToimage={news.linkToimage}
              Source={news.Source}
              linkTonews={news.linkTonews}
            />
          ))
        )}
      </div>
    );
  }
}
export default Sport;
