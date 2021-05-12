import React, { Component } from "react";
import ShowForecast from "./showForecast.js";
import axios from "axios";
//import logo from "./load.svg";
import rea from "./rea.ico";

class Forecast extends Component {
	constructor() {
		super();
		this.state = {
			arr: [],
			Load: true,
		};
	}

	componentDidMount() {
		axios
			.get("/forecast", {
				timeout: 8000,
			})
			.then((res) => {
				this.setState({
					arr: res.data,
					Load: false,
				});
				//console.log(this.state.arr);
			});
	}

	render() {
		return (
			<div>
				{this.state.Load ? (
					<div style={{ marginTop: "5em" }}>
						<center>
							<h6 className="">
								<br />
								<br />
								LOADING...
								<br />
								<br />
								<img src={rea} className="icon" alt=""></img>
							</h6>
						</center>
					</div>
				) : (
					this.state.arr.map((data) => (
						<div>
							{" "}
							<ShowForecast
								key={data.valid_date}
								pressure={Math.ceil(data.pres)}
								precipitation={Math.ceil(data.pop)}
								min_temp={Math.ceil(data.low_temp)}
								max_temp={Math.ceil(data.high_temp)}
								date={data.datetime}
								temp={Math.ceil(data.temp)}
								icon={data.weather.icon}
								description={data.weather.description}
							/>
						</div>
					))
				)}
			</div>
		);
	}
}
export default Forecast;
