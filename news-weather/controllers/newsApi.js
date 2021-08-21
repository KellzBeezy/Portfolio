const request = require("request");

const api = (req, rest) => {
	try {
		const type = req.type;
		request(
			`https://newsapi.org/v2/top-headlines?country=za&category=${type}&apiKey=${process.env.NEWS_API}`,
			function (err, res, body) {
				var tech = [];
				if (err) {
					console.log(err);
				}
				console.log(res);
				if (JSON.parse(body)["articles"])
					for (let index = 0; index < 20; ++index) {
						var headline = JSON.parse(body)
							? JSON.parse(body)["articles"][index].title
							: null;
						var content = JSON.parse(body)
							? JSON.parse(body)["articles"][index].description
							: null;
						var linkTonews = JSON.parse(body)
							? JSON.parse(body)["articles"][index].url
							: null;
						var linkToimage = JSON.parse(body)
							? JSON.parse(body)["articles"][index].urlToImage
							: null;
						var Source = JSON.parse(body)
							? JSON.parse(body)["articles"][index]["source"].name
							: null;
						var Id = JSON.parse(body)
							? JSON.parse(body)["articles"][index].title
							: null;

						tech.push({
							headline,
							content,
							linkToimage,
							linkTonews,
							Source,
							Id,
						});
					}

				rest.send(tech);
				rest.end();
			}
		);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { api };
