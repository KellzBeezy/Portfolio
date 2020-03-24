import React from "react";

const ShowSport = ({ headline, content, linkToimage, Source, linkTonews }) => {
  return (
    <div className="mobile">
      <h3>
        <a href={linkTonews} target="_blank">
          {headline}
        </a>
      </h3>
      <a href={linkTonews} target="_blank">
        <img className="RIGHT_image" src={linkToimage} alt="" />
      </a>
      <h5>{Source}</h5>
      <p>{content}</p>
    </div>
  );
};
export default ShowSport;
