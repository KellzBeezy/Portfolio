import React,{useEffect,useState} from 'react';
import Movies from './showMovies.js';
import axios from 'axios';


const Getmovies = () =>{

   const [movies,setMovies] = useState([]);

   useEffect(() => {

    axios.get('/movies').then (res=>{
        setMovies(res.data); 
        console.log(res.data);
    });
    console.log("Im the motherfucken app");
    },[]);

    return( 
    <div>

        <center>
            <div className="movies">
                <hr/>
            <h2>Here are Some of The Trending Movies</h2>
                { 
                   movies.map(move=>(
                    < Movies
                            key={move.Id}
                            popularity={move.popularity}
                            title={move.title} 
                            overview={move.description}
                            image={move.poster}
                            release={move.release}
                    />
                   ))
                }  

            </div>
        </center>
    </div>
    );
}
export default Getmovies;