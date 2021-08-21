import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css";
import Temp from "./Temp.js";
import DailyTemp from "./forecast.js";
import News from "./News.js";
import GetMovies from "./getmovies";
import Foot from "./foot.js";
import Sport from "./Sports.js";
import Tech from "./Tech.js";
import About from "./About.js";
import Header from "./header.js";
import Weather from "./weatherSlider";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../state/actions/newsAction";
import { getWeather } from "../state/actions/weatherAction";
import { getForecast } from "../state/actions/forecastAction";
import { getSports } from "../state/actions/sportAction";
import { getMovies } from "../state/actions/moviesAction";
import { getTechnology } from "../state/actions/technologyAction";
import { getBusiness } from "../state/actions/businessAction";

const App = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		const getLocation = async () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			}
		};
		const showPosition = (position) => {
			dispatch(getNews());
			dispatch(getWeather());
			dispatch(
				getForecast(position.coords.latitude, position.coords.longitude)
			);
			dispatch(getSports());
			dispatch(getMovies());
			dispatch(getTechnology());
			dispatch(getBusiness());
		};
		getLocation();
	}, [dispatch]);
	const weather = useSelector((state) => state.forecast);
	return (
		<BrowserRouter>
			<Header />
			{weather?.data?.data ? (
				<Weather
					text={`${weather?.data?.city},   ${
						weather?.data?.data[0].datetime
					} temperature is @ ${Math.floor(
						weather?.data?.data[0].app_min_temp
					)} `}
				/>
			) : null}
			<div className="App">
				<div className="goDown">
					<div className="container mobile">
						<div className="  row">
							<div id="sidey" className="col-md-4">
								<div className="RIGHT">
									<Temp />
								</div>
								<div className="movie_right">
									<GetMovies />
								</div>
							</div>

							<div id="dynamic" className="col-md-8 LEFT">
								<Route path="/forecast" exact component={DailyTemp} />
								<Route path="/sport" exact component={Sport} />
								<Route path="/tech" exact component={Tech} />
								<Route path="/buzz" exact component={News} />
								<Route path="/about" exact component={About} />
								<Route path="/" exact component={News} />
								<Route path="/news" exact component={News} />
								{/* <Route
										path="/p"
										component={
											<div>
												<h4>404 </h4>
												<p>Oops!! You Are Lost</p>
											</div>
										}
									/> */}
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="all">
					<Foot />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
