const request = require("request");

const forecastApi = (req, res) => {
	const { lat, lon } = req.params;
	try {
		request(
			`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=7&key=${process.env.WEATHER_API_DAILY}`,
			function (err, response, body) {
				if (err) {
					console.log("forecast", err);
				}

				const data = JSON.parse(body)["data"];
				const city = JSON.parse(body)["city_name"];

				res.send({ data, city });
				res.end();
			}
		);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { forecastApi };
