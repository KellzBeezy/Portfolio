import React, { Component } from "react";
import axios from "axios";

//mounted : false
class About extends Component {
	constructor() {
		super();
		this.state = {
			arr: [],
			Load: true,
		};
	}

	componentDidMount() {
		axios.get("#").then((res) => {
			this.setState({
				arr: res.data,
				Load: false,
			});
			const show = document.getElementsByClassName("movie_right   ");
			show.style.display = "none";
			//console.log(this.state.arr);
		});
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
