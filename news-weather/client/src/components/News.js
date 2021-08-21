import React from "react";
import ShowNews from "./showNews.js";
import { useSelector } from "react-redux";
import rea from "./rea.ico";

const News = () => {
	const res = useSelector((state) => state.news);
	const [news, setNews] = React.useState([]);
	const [load, setLoad] = React.useState(true);

	React.useEffect(() => {
		if (res) {
			setNews(res);
			setLoad(false);
		}

		//console.log(this.state.arr);
	}, [res]);
	console.log("news", news);
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
				news?.map((eachNews) => (
					//console.log(news.headline),
					<ShowNews
						key={eachNews.Id}
						headline={eachNews.headline}
						content={eachNews.content}
						linkToimage={eachNews.linkToimage}
						Source={eachNews.Source}
						linkTonews={eachNews.linkTonews}
					/>
				))
			)}
		</div>
	);
};

export default News;
