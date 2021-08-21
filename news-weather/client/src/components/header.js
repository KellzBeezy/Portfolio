import React from "react";
import { Link } from "react-router-dom";
import Banner from "./rea.ico";

const Header = () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
				<div className="navbar-header page-scroll">
					<div>
						<Link to="/" replace className="navbar-brand">
							<img src={Banner} width="35px" height="35px" alt="" />
						</Link>
					</div>
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
							<Link
								to="/"
								replace
								onClick={() => {
									document.getElementById("temp").style.display = "block";
									//document.getElementByTagName("div").removeClass("LEFT");
								}}
							>
								News
							</Link>
						</li>
						<li>
							<Link
								to="/sport"
								replace
								onClick={() => {
									document.getElementById("temp").style.display = "block";
									//document.getElementByTagName("div").removeClass("LEFT");
								}}
							>
								Sport
							</Link>
						</li>
						<li>
							<Link
								to="/tech"
								replace
								onClick={() => {
									document.getElementById("temp").style.display = "block";
									//document.getElementByTagName("div").removeClass("LEFT");
								}}
							>
								Technology
							</Link>
						</li>{" "}
						<li>
							<Link
								to="/buzz"
								replace
								onClick={() => {
									document.getElementById("temp").style.display = "block";
									//document.getElementByTagName("div").removeClass("LEFT");
								}}
							>
								Business
							</Link>
						</li>
						<li className="is-active">
							<Link
								to="/About"
								replace
								onClick={() => {
									document.getElementById("temp").style.display = "block";
									//document.getElementByTagName("div").removeClass("LEFT");
								}}
							>
								About Us
							</Link>
						</li>
						<li>
							<i className="flag flag-united-states"></i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
