import React from 'react';
import logo from './logo.svg';
import './App.css';
import Temp from './Temp.js';
import News from './News.js';
import Getmovies from './getmovies';
import Foot from './foot.js';

  /*
    <div className='LEFT'>
  *         <News/>
  *  </div>
  */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="App-title">Welcome To the Development Site Of the Coolest App In Town!!</h4>
        <div className='head'>
            <li><a href='http://localhost:5000/inde'>Home</a></li>
            <li><a href="https://cnn.com">News</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </div>
      </header>
      <h5 className='color-drive'><strong><em>Visit Drive And Brake (pvt) ltd. In just a single visit to Drive and Brake, your problems are over!!</em></strong></h5>
      <div className='cont'>
        <div >
          <div className='RIGHT'>
            <Temp/>
            <Getmovies/>
          </div>
          <div className='LEFT'>
            <News/>
          </div>
        </div>  
        <div className='all'>
            <Foot/>
        </div> 
      </div>   
    </div>
  );
}

export default App;
