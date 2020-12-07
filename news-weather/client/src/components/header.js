import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./rea.ico";

export default class header extends Component {
	render() {
		const style = { color: "gold" };
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
					<div className="navbar-header page-scroll">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>{" "}
						<a className="navbar-brand" href="#page-top">
							<img src={Banner} width="35px" height="35px" alt="" />
						</a>
					</div>
					{/*<!-- Collect the nav links, forms, and other content for toggling -->*/}

					<div
						className="collapse navbar-collapse"
						id="bs-example-navbar-collapse-1"
					>
						{" "}
						<ul className="nav navbar-nav navbar-right">
							<li className="hidden">
								<a href="#page-top">m</a>
							</li>
							<li className="is-active">
								<Link to="/" replace>
									News
								</Link>
							</li>
							<li>
								<Link to="/sport" replace>
									Sport
								</Link>
							</li>
							<li>
								<Link to="/tech" replace>
									Technology
								</Link>
							</li>
							<li className="is-active">
								<Link to="/About" replace>
									About Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
