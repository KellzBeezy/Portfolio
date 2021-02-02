import React, { Component } from "react";
import Banner from "./rea.ico";

export default class foot extends Component {
	render() {
		return (
			<div className="ftbottom">
				<div>
					<footer className=" row " style={style}>
						<div className="col col-lg-7 " style={{ marginTop: "2.5em" }}>
							<h6>
								<u>Note</u>
							</h6>
							<p>
								<i>
									{" "}
									We Have Done So Much With So Little for so long That We Can Do
									Anything With Nothing!!!
								</i>
							</p>
						</div>
						<div className="col col-lg-5" style={{ marginTop: "2.5em" }}>
							<ul className="foot-list row">
								<div className="col col-lg-2 ">
									<li>
										<a
											href="https://www.facebook.com/Kelvingwari"
											target="_Blank"
											without
											rel="noopener noreferrer"
										>
											<img
												style={{ color: "blue" }}
												className="fa fa-facebook"
												src="#"
												alt=""
												width="100%"
											/>
										</a>
									</li>
								</div>

								<div className="col col-lg-2 foot-list">
									<li>
										<a
											href="https://twitter.com/Kelvin_beezy"
											target="_Blank"
											without
											rel="noopener noreferrer"
										>
											<img
												style={{ color: "powderblue" }}
												className="fa fa-twitter"
												src="#"
												alt=""
												width="100%"
											/>
										</a>
									</li>
								</div>

								<div className="col col-lg-2 foot-list">
									<li>
										<a
											href="https://www.linkedin.com/in/kelvin-gwari-608b91123/"
											target="_Blank"
											without
											rel="noopener noreferrer"
										>
											<img
												style={{ color: "whitesmoke" }}
												className="fa fa-linkedin"
												src="#"
												alt=""
												width="100%"
											/>
										</a>
									</li>
								</div>

								<div className="col col-lg-2 foot-list">
									<li>
										<a
											href="https://github.com/KellzBeezy"
											target="_Blank"
											without
											rel="noopener noreferrer"
										>
											<img
												style={{
													color: "black",
												}}
												className="fa fa-github"
												src="#"
												alt=""
												width="100%"
											/>
										</a>
									</li>
								</div>
							</ul>
						</div>
						<div className="foot container">
							<h6 className="color">
								<em>{}</em>
							</h6>
							<p>
								{" "}
								<img src={Banner} alt="" width="25px" />
								&copy;{new Date().getFullYear()}{" "}
							</p>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}
const style = {
	marginTop: "12em",
};
