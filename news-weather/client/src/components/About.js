import React, { Component } from "react";
//mounted : false
 class About extends Component {
   componentDidMount(){
    
   }
  
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
export default About;