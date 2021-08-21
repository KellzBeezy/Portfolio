import React from "react";

const ShowNews = ({ headline, content, linkToimage, Source, linkTonews }) => {
	return (
		<div className="">
			<h3>
				<a href={linkTonews} target="_blank" rel="noopener noreferrer">
					{headline}
				</a>
			</h3>
			<a href={linkTonews} target="_blank" rel="noopener noreferrer">
				<img className="RIGHT_image" src={linkToimage} alt="" />
			</a>
			<h5>{Source}</h5>
			<p>{content}</p>
		</div>
	);
};
export default ShowNews;
