import React from "react";

const ShowSport = ({ headline, content, linkToImage, Source, linkToNews }) => {
	return (
		<div className="mobile">
			<h3>
				<a href={linkToNews} target="_blank" rel="noopener noreferrer">
					{headline}
				</a>
			</h3>
			<a href={linkToNews} target="_blank" rel="noopener noreferrer">
				<img className="RIGHT_image" src={linkToImage} alt="" />
			</a>
			<h5>{Source}</h5>
			<p>{content}</p>
		</div>
	);
};
export default ShowSport;
