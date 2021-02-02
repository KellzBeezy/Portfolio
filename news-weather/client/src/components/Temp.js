import React, { Component } from "react";
import axios from "axios";
import rea from "./rea.ico";

class Temp extends Component {
	constructor() {
		super();
		this.state = {
			temp: "",
			low: "",
			max: "",
			feel: "",
			description: "",
			Load: true,
		};
	}
	componentDidMount() {
		axios.get("/weather").then((res) => {
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
	componentWillUMount() {}

	render() {
		const str = ` http://openweathermap.org/img/wn/${this.state.icon}.png`;

		const style = { marginTop: "30px", backgroundColor: "black" };
		return (
			<div style={style}>
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
									<img src={rea} style={{ minWidth: "9em" }} alt=""></img>
								</h6>
							</center>
						</div>
					) : (
						<div className="row">
							<h4>The weather is brought to you by the open weather channel</h4>
							<div>
								<img src={str} width="200px" alt="" />

								<span className="temps">
									<h6>
										{this.state.feel}
										<sup>o</sup>C<br />
									</h6>

									<h6 style={{ color: "white" }}>
										{this.state.max}
										<sup>o</sup>C / {this.state.low}
										<sup>o</sup>C
									</h6>
									<h6>{this.state.description}</h6>
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}
export default Temp;
