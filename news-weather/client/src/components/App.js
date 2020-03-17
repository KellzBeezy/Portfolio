import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css";
import Temp from "./Temp.js";
import News from "./News.js";
import Getmovies from "./getmovies";
import Foot from "./foot.js";
import Sport from "./Sports.js";
import Home from "./Home.js";
import About from "./About.js";
import Header from "./header.js";

/*
    <div className='LEFT'>
  *         <News/>
  *  </div>
  */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <h5 className="color-drive">
              <strong>
                <em>
                  Visit Drive And Brake (pvt) ltd. In just a single visit to
                  Drive and Brake, your problems are over!!
                </em>
              </strong>
            </h5>
            <div>
              <div className="overFlow">
                <div className="RIGHT container">
                  <Temp />
                  <Getmovies />
                </div>
                <div className="LEFT container">
                  <Route path="/sport" exact component={Sport} />
                  <Route path="/news" exact component={News} />
                  <Route path="/about" exact component={About} />
                  <Route path="/home" exact component={Home} />
                </div>
              </div>
              <div className="all">
                <Foot />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
