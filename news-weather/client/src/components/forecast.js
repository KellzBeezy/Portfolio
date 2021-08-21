import React from "react";
import ShowForecast from "./showForecast.js";
import { useSelector } from "react-redux";
import rea from "./rea.ico";

const Forecast = () => {
	const res = useSelector((state) => state.forecast);
	const [forecast, setForeCast] = React.useState([]);
	const [load, setLoad] = React.useState(true);
	React.useEffect(() => {
		if (res) {
			setForeCast(res?.data?.data);
			setLoad(false);
		}
	}, [res]);

	return (
		<div>
			{load ? (
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
				<>
					<h4 style={{ marginTop: "40px" }}>
						A seven day forecast for {res?.data?.city}
					</h4>
					{forecast?.map((data) => (
						<ShowForecast
							key={`${data.valid_date} ${data.temp}`}
							pressure={Math.ceil(data.pres)}
							precipitation={Math.ceil(data.pop)}
							min_temp={Math.ceil(data.low_temp)}
							max_temp={Math.ceil(data.high_temp)}
							date={data.datetime}
							temp={Math.floor(data.app_min_temp)}
							icon={data.weather.icon}
							description={data.weather.description}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default Forecast;
