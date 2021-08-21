import React from "react";
import { WiBarometer, WiHumidity, WiCelsius } from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { days } from "../constants";

const showForecast = ({
	pressure,
	precipitation,
	min_temp,
	max_temp,
	date,
	temp,
	icon,
	description,
}) => {
	const foreCastDay = new Date(date);
	const day = foreCastDay.getDay();
	const dayOfWeek = days[day];

	const url = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
	return (
		<div className=" col-md-6" style={{ marginTop: "2em", border: "5" }}>
			<div className="card">
				<h5 className="card-title">{dayOfWeek}</h5>
				<img src={url} className="card-img-top" alt="..." />

				<div className="row">
					<div className="col-md-6">
						<WiBarometer size="2em" color="purple" />
						{pressure} <span style={{ color: "red" }}>mb</span>
					</div>
					<div className="col-md-6 ">
						<WiHumidity size="2em" color="blue" /> {precipitation}%
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-md-6">
						<FaTemperatureLow size="2em" color="powderBlue" />
						{min_temp}
						<WiCelsius size="30" color="orange" />
					</div>
					<div className="col-md-6 ">
						<FaTemperatureHigh size="2em" color="red" /> {max_temp}
						<WiCelsius size="30" color="orange" />
					</div>
				</div>
				<span>
					{temp}
					<WiCelsius size="30" color="orange" />
				</span>
				<hr className="bg-primary" />
				<div className="card-body">
					<p className="card-text" style={{ color: "green" }}>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
export default showForecast;
