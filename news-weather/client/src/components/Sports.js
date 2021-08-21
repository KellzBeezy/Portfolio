import React from "react";
import ShowSport from "./showSport.js";
import { useSelector } from "react-redux";
import rea from "./rea.ico";

const Sport = () => {
	const sport = useSelector((state) => state.sports);
	const [sports, setSports] = React.useState([]);
	const [load, setLoad] = React.useState(true);

	React.useEffect(() => {
		if (sport) {
			setSports(sport);
			setLoad(false);
		}

		//console.log(this.state.arr);
	}, [sport]);
	console.log("sports", sports);
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
				sports.map((sport) => (
					<ShowSport
						key={sport.Id}
						headline={sport.headline}
						content={sport.content}
						linkToImage={sport.linkToimage}
						Source={sport.Source}
						linkToNews={sport.linkTonews}
					/>
				))
			)}
		</div>
	);
};

export default Sport;
