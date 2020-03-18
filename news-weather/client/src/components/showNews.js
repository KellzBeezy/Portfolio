import React from "react";

const ShowNews = ({ headline, content, linkToimage, Source, linkTonews }) => {
  return (
    <div>
      <h3>
        <a target="_blank" rel="noopener noreferer" href={linkTonews}>
          {headline}
        </a>
      </h3>
      <a target="_blank" rel=" noopener noreferer" href={linkTonews}>
        <img className="RIGHT_image" src={linkToimage} alt="" />
      </a>
      <h5>{Source}</h5>
      <p>{content}</p>
    </div>
  );
};
export default ShowNews;
