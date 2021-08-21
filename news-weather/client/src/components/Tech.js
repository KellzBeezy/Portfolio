import React from "react";
import ShowTech from "./showTech.js";
import rea from "./rea.ico";
import { useSelector } from "react-redux";

const Tech = () => {
	const techs = useSelector((state) => state.technology);
	const [technology, setTechnology] = React.useState([]);
	const [load, setLoad] = React.useState(true);

	React.useEffect(() => {
		if (techs) {
			console.log("tech", techs);
			setTechnology(techs);
			setLoad(false);
		}
	}, [techs]);

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
				technology.map((tech) => (
					<ShowTech
						key={tech.Id}
						headline={tech.headline}
						content={tech.content}
						linkToImage={tech.linkToimage}
						Source={tech.Source}
						linkToNews={tech.linkTonews}
					/>
				))
			)}
		</div>
	);
};

export default Tech;
