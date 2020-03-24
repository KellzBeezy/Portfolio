import React from "react";
//import style from "./movies.module.css";

const Movies = ({ popularity, title, overview, image, release }) => {
  const str = "https://image.tmdb.org/t/p/w400";
  //const surl = str + image;
  console.log(image);
  return (
    <center>
      <div className="mobile">
        <h3>{title}</h3>
        <p>{overview}</p>
        <div>
          <img className="LEFT_image" src={str + image} alt="" />
        </div>
        <h4> {release}</h4>
      </div>
      <hr />
    </center>
  );
};

export default Movies;
