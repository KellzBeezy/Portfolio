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
        icon: res.data.icon,
        Load: false,
        

      });
    });
  }
  componentWillUMount() {

  }
  
  render() {
    const str = ` http://openweathermap.org/img/wn/${this.state.icon}.png`;
    
    const style = {marginTop : '30px', backgroundColor:"black"};
    return (
      
      <div style={style}>
        <h4>The weather is brought to you by the open weather channel</h4>

        <div>
          {this.state.Load ? ( <h6 className="">Loading...</h6> ) : 
          (
            <div className='row'>
              <div > 
                <img src={str} width='200px' alt=''/>
               
                <span className='temps'> 
                  <h6>{this.state.feel}<sup>o</sup>C<br /></h6>
                  
                  <h6 style={{color:"white"}}>{this.state.max}
                  <sup>o</sup>C / {this.state.low}
                  <sup>o</sup>C</h6>
                  <h6>{this.state.description}</h6></span>
             
           </div>
           </div>
          )}
        </div>
      </div>
    );
  }
}
export default Temp;
