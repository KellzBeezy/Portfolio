import React, { Component } from "react";
import Banner from "./rea.ico";

export default class foot extends Component {
  render() {
    return (
      <div>
        <div className="container foot">
          <footer className=" row ">
            <div className="col col-lg-7 ">
              <h6>
                <u>Note</u>
              </h6>
              <p>
                We Have Done So Much With So Little for so long That We Can Do
                Anything With Nothing!!!
              </p>
            </div>
            <div className="col col-lg-5">
              <ul className="foot-list row">
                <div className="col col-lg-2 foot-list">
                  <li>
                    <img
                      className="fa fa-facebook"
                      src="#"
                      alt=""
                      width="100%"
                    />
                  </li>
                </div>

                <div className="col col-lg-2 foot-list">
                  <li>
                    <img
                      className="fa fa-twitter"
                      src="#"
                      alt=""
                      width="100%"
                    />
                  </li>
                </div>

                <div className="col col-lg-2 foot-list">
                  <li>
                    <img
                      className="fa fa-linkedin"
                      src="#"
                      alt=""
                      width="100%"
                    />
                  </li>
                </div>

                <div className="col col-lg-2 foot-list">
                  <li>
                    <img className="fa fa-github" src="#" alt="" width="100%" />
                  </li>
                </div>
              </ul>
            </div>
            <div className="foot container">
              <h6 className="color">
                <em>
                  {}
                  developed by <img src={Banner} alt="" width="2%" />
                </em>
              </h6>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
