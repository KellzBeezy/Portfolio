const request = require("request");

const movieApi = (req, rest) => {
	const page = Math.ceil(Math.random() * 5);

	try {
		request(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=` +
				page,
			function (err, res, body) {
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
	} catch (error) {
		console.error(error);
	}
};
module.exports = { movieApi };
