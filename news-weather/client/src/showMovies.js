import React from 'react';
//import style from "./movies.module.css";

const Movies = ({popularity, title,overview,image,release}) => {
     
    const str = 'https://image.tmdb.org/t/p/w400';
    //const surl = str + image;
    console.log(image);
    return(<center>
        <div>
            <h3>{title}</h3>
            <p>{overview}</p> 
            <div className='image'>
                <img src={ str+image } alt='fuck you' />
            </div>
            <h4> {release}</h4>
        </div>
        <hr/>
        </center>
    );
}

export default Movies;