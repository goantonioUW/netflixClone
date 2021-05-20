import React, {useState, useEffect} from "react";
import axios from './axios';
import row from './row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on specific condition/variable
    useEffect(() => {
        //if [] is emppty, run once when row loads, then dont run again
        async function fetchData(){
            //This will combine the starting URL with the ending URL & API key from the request file
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchURL])

    // console.log(movies)

    return (
        <div className="row">
            {/* TITLE */}
            <h2>{title}</h2>

            <div className="row_posters">
            {/* several row posers */}

            {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_postserLarge"}`}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path}
                    `} 
                alt={movie.name} />
            ))}
            </div>
          
        </div>
    )
};

export default Row