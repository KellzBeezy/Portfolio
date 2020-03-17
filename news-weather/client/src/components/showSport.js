import React from "react";

const ShowSport = ({ headline, content, linkToimage, Source, linkTonews }) => {
  return (
    <div>
      <h3>
        <a href={linkTonews}>{headline}</a>
      </h3>
      <a href={linkTonews}>
        <img className="RIGHT_image" src={linkToimage} alt="" />
      </a>
      <h5>{Source}</h5>
      <p>{content}</p>
    </div>
  );
};
export default ShowSport;
