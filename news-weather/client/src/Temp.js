import React, { Component } from 'react';
import axios from 'axios';

 class Temp extends Component {
    constructor (){
        super();
        this.state = {
            temp: 'No temperature',
            low: 'No temperature',
            max: 'No temperature',
            feel: 'No temperature',
            description: 'No temperature'
        }
    }
    componentDidMount(){
        axios.get('/weather').then (res=>{
            this.setState({ 
                temp: res.data.temp,
                low: res.data.low,
                max: res.data.max,
                feel: res.data.feel ,
                description: res.data.description
            })
           
        });
    }

    render() {
        return (
    <div>
        <h3 className='weather'>The weather Forecast!</h3>
        
            
                <h4>The weather is brought to you by the open weather channel</h4>
                <h5>The weather in Lefke Today</h5>
                <p> 
                    Temperature: {this.state.temp}<sup>o</sup>C<br/>
                    Feels like: {this.state.feel}<sup>o</sup>C<br/>
                    Max temperature: {this.state.max}<sup>o</sup>C<br/>
                    Min temperature: {this.state.low}<sup>o</sup>C
                </p>
                <h6>{this.state.description}</h6>
    </div>
        )
    }
}
export default Temp;