import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css";
import Temp from "./Temp.js";
import News from "./News.js";
import Getmovies from "./getmovies";
import Foot from "./foot.js";
import Sport from "./Sports.js";
import Tech from "./Tech.js";
import About from "./About.js";
import Header from "./header.js";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<div className="goDown">
						<h5 className="color-drive">
							<strong>
								<em>
									Visit Drive And Brake (pvt) ltd. In just a single visit to
									Drive and Brake, your problems are over!!
								</em>
							</strong>
						</h5>
						<div className="container mobile">
							<div className="  row">
								<div className="col-md-4">
									<div className="RIGHT">
										<Temp />
									</div>
									<div className="movie_right">
										<Getmovies />
									</div>
								</div>

								<div className="col-md-8 LEFT">
									<Route path="/sport" exact component={Sport} />
									<Route path="/tech" exact component={Tech} />
									<Route path="/about" exact component={About} />
									<Route path="/" exact component={News} />
									<Route path="/news" exact component={News} />
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="all">
						<Foot />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
