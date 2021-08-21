const request = require("request");

const weatherApi = (req, rest) => {
	try {
		request(
			`http://api.openweathermap.org/data/2.5/weather?q=pretoria&appid=${process.env.WEATHER_API}`,
			function (err, res, body) {
				let temp = Math.ceil(JSON.parse(body)["main"].temp - 273);
				let feel = Math.ceil(JSON.parse(body)["main"].feels_like - 273);
				let description = JSON.parse(body)["weather"][0].description;
				let max = Math.ceil(JSON.parse(body)["main"].temp_max - 273);
				let low = Math.ceil(JSON.parse(body)["main"].temp_min - 273);
				let icon = JSON.parse(body)["weather"][0].icon;

				rest.send({ feel, temp, max, low, description, icon });
				rest.end();
			}
		);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { weatherApi };
