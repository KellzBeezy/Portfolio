import React, { Component } from "react";
import ShowNews from "./showNews.js";
import axios from "axios";
//import logo from "./load.svg";
import rea from "./rea.ico";

class News extends Component {
	constructor() {
		super();
		this.state = {
			arr: [],
			Load: true,
		};
	}

	componentDidMount() {
		axios.get("/news").then((res) => {
			this.setState({
				arr: res.data,
				Load: false,
			});
			//console.log(this.state.arr);
		});
	}

	render() {
		return (
			<div>
				{this.state.Load ? (
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
					this.state.arr.map((news) => (
						//console.log(news.headline),
						<ShowNews
							key={news.Id}
							headline={news.headline}
							content={news.content}
							linkToimage={news.linkToimage}
							Source={news.Source}
							linkTonews={news.linkTonews}
						/>
					))
				)}
			</div>
		);
	}
}
export default News;
