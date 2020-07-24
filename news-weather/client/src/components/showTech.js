import React from "react";

const ShowTech = ({ headline, content, linkToimage, Source, linkTonews }) => {
	return (
		<div className="mobile">
			<h3>
				<a href={linkTonews} target="_blank" without rel="noopener noreferrer">
					{headline}
				</a>
			</h3>
			<a href={linkTonews} target="_blank" without rel="noopener noreferrer">
				<img className="RIGHT_image" src={linkToimage} alt="" />
			</a>
			<h5>{Source}</h5>
			<p>{content}</p>
		</div>
	);
};
export default ShowTech;
