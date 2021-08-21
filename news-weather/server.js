const express = require("express");
var fs = require("fs");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { api } = require("./controllers/newsApi");
const { movieApi } = require("./controllers/movieApi");
const { weatherApi } = require("./controllers/weatherApi");
const { forecastApi } = require("./controllers/forecastApi");

app.use(cors());
app.options("*", cors());

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

const port = process.env.PORT || 5000;

//GET EEKLY FORECAST
app.get("/api/forecast/:lat/:lon", forecastApi);

//GET WEATHER
app.get("/api/weather", weatherApi);

//GET MOVIES
app.get("/api/movies", movieApi);

//GET TECH NEWS
app.get(
	"/api/tech",
	(req, res, next) => {
		req.type = "technology";
		next();
	},
	api
);

//GET BUSINESS NEWS
app.get(
	"/api/business",
	(req, res, next) => {
		req.type = "business";
		next();
	},
	api
);

//GET SPORTS NEWS
app.get(
	"/api/sport",
	(req, res, next) => {
		req.type = "sport";
		next();
	},
	api
);

//GET GENERAL NEWS
app.get(
	"/api/news",
	(req, res, next) => {
		req.type = "general";
		next();
	},
	api
);

app.get("/", (req, res) => {
	res.json({ message: `ARE YOU LOST?` });
	res.end();
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
