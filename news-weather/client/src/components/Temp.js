import React from "react";
import rea from "./rea.ico";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Temp = () => {
	const res = useSelector((state) => state.weather);
	const [weather, setWeather] = React.useState({
		temp: "",
		icon: "01n",
		low: "",
		max: "",
		feel: "",
		description: "",
		Load: true,
	});

	React.useEffect(() => {
		if (res !== null) {
			setWeather({
				temp: res.temp,
				low: res.low,
				max: res.max,
				feel: res.feel,
				description: res.description,
				icon: ` http://openweathermap.org/img/wn/${res.icon}.png`,
				Load: false,
			});
		}
	}, [res]);

	const style = { marginTop: "30px" };
	return (
		<div id="temp" style={style}>
			<div>
				{weather.load ? (
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
						{/* <div className="card">
							<h4 className="card-title">
								The weather is brought to you by the open weather channel
							</h4>
							<div>
								<img
									style={{ backgroundColor: "powderBlue" }}
									className="card-img-top"
									src={weather?.icon}
									width="200px"
									alt=""
								/>
								<div className="card-body">
									<span className="temps">
										<h6>
											{weather.feel}
											<sup>o</sup>C<br />
										</h6>

										<h6 style={{}}>
											{weather.max}
											<sup>o</sup>C / {weather.low}
											<sup>o</sup>C
										</h6>
										<p className="card-text">{weather.description}</p>
									</span>
								</div>
							</div>
						</div> */}
						<Link id="me" to="/forecast" replace>
							<span
								className="btn btn-primary"
								onClick={() => {
									document.getElementById("temp").style.display = "none";
									//document.getElementByTagName("div").removeClass("LEFT");
								}}
							>
								Daily forecast
							</span>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Temp;
