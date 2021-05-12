import React, { Component } from "react";
import axios from "axios";
import rea from "./rea.ico";
import { Link } from "react-router-dom";

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

		const style = { marginTop: "30px" };
		return (
			<div id="temp" style={style}>
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
							<div class="card">
								<h4 className="card-title">
									The weather is brought to you by the open weather channel
								</h4>
								<div>
									<img
										style={{ backgroundColor: "powderBlue" }}
										className="card-img-top"
										src={str}
										width="200px"
										alt=""
									/>
									<div class="card-body">
										<span className="temps">
											<h6>
												{this.state.feel}
												<sup>o</sup>C<br />
											</h6>

											<h6 style={{}}>
												{this.state.max}
												<sup>o</sup>C / {this.state.low}
												<sup>o</sup>C
											</h6>
											<p class="card-text">{this.state.description}</p>
										</span>
									</div>
								</div>
							</div>
							<Link id="me" to="/forecast" replace>
								<spam
									className="btn btn-primary"
									onClick={() => {
										document.getElementById("temp").style.display = "none";
										//document.getElementByTagName("div").removeClass("LEFT");
									}}
								>
									Daily forecast
								</spam>
							</Link>
						</div>
					)}
				</div>
			</div>
		);
	}
}
export default Temp;
