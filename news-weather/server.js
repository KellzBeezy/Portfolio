const express = require("express");
var request = require("request");
var fs = require("fs");
//var dep =
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

const port = process.env.PORT || 5000;

//GET WEATHER
app.get("/weather", (req, rest) => {
	request(
		`http://api.openweathermap.org/data/2.5/weather?q=lefke&appid=${process.env.WEATHER_API}`,
		function(err, res, body) {
			var temp = Math.ceil(JSON.parse(body)["main"].temp - 273);
			var feel = Math.ceil(JSON.parse(body)["main"].feels_like - 273);
			var description = JSON.parse(body)["weather"][0].description;
			var max = Math.ceil(JSON.parse(body)["main"].temp_max - 273);
			var low = Math.ceil(JSON.parse(body)["main"].temp_min - 273);
			var icon = JSON.parse(body)["weather"][0].icon;

			rest.send({ feel, temp, max, low, description, icon });
			rest.end();
		}
	);
});

//GET Tech NEWS
app.get("/tech", (req, rest) => {
	request(
		`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API}`,
		function(err, res, body) {
			var tech = [];

			for (let index = 0; index < 20; ++index) {
				var headline = JSON.parse(body)["articles"][index].title;
				var content = JSON.parse(body)["articles"][index].description;
				var linkTonews = JSON.parse(body)["articles"][index].url;
				var linkToimage = JSON.parse(body)["articles"][index].urlToImage;
				var Source = JSON.parse(body)["articles"][index]["source"].name;
				var Id = JSON.parse(body)["articles"][index].title;

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
});

//GET Sports NEWS
app.get("/sport", (req, rest) => {
	request(
		`https://newsapi.org/v2/top-headlines?country=za&category=sport&apiKey=${process.env.NEWS_API}`,
		function(err, res, body) {
			var n_sports = [];

			for (let index = 0; index < 20; ++index) {
				var headline = JSON.parse(body)["articles"][index].title;
				var content = JSON.parse(body)["articles"][index].description;
				var linkTonews = JSON.parse(body)["articles"][index].url;
				var linkToimage = JSON.parse(body)["articles"][index].urlToImage;
				var Source = JSON.parse(body)["articles"][index]["source"].name;
				var Id = JSON.parse(body)["articles"][index].title;

				n_sports.push({
					headline,
					content,
					linkToimage,
					linkTonews,
					Source,
					Id,
				});
			}

			rest.send(n_sports);
			rest.end();
		}
	);
});

//GET MOVIES
app.get("/movies", (req, rest) => {
	var page = Math.ceil(Math.random() * 5);

	//console.log(page);
	request(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=` +
			page,
		function(err, res, body) {
			var movies = [];
			for (let index = 0; index < 11; ++index) {
				var popularity = JSON.parse(body)["results"][index].popularity;
				var title = JSON.parse(body)["results"][index].title;
				var description = JSON.parse(body)["results"][index].overview;
				var release = JSON.parse(body)["results"][index].release_date;
				var poster = JSON.parse(body)["results"][index].poster_path;
				var Id = JSON.parse(body)["results"][index].id;

				movies.push({ popularity, title, description, release, poster, Id });
			}
			rest.send(movies);
			rest.end();
		}
	);
});
//getnews
app.get("/news", (req, rest) => {
	request(
		`https://newsapi.org/v2/top-headlines?country=za&apiKey=${process.env.NEWS_API}`,
		function(err, res, body) {
			var news = [];

			for (let index = 0; index < 20; ++index) {
				var headline = JSON.parse(body)["articles"][index].title;
				var content = JSON.parse(body)["articles"][index].description;
				var linkTonews = JSON.parse(body)["articles"][index].url;
				var linkToimage = JSON.parse(body)["articles"][index].urlToImage;
				var Source = JSON.parse(body)["articles"][index]["source"].name;
				var Id = JSON.parse(body)["articles"][index].title;

				news.push({ headline, content, linkToimage, linkTonews, Source, Id });
			}

			rest.send(news);
			rest.end();
		}
	);
});

app.get("/", (req, res) => {
	//console.log('you did it');
	//res.render("inde");
	res.send("wow!!");
	res.end();
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
