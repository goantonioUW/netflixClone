import React, {useState, useEffect} from "react";
import axios from '../axios';
import '../css/row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //A snippet of code which runs based on specific condition/variable
    useEffect(() => {
        //if [] is emppty, run once when row loads, then dont run again
        async function fetchData(){
            //This will combine the starting URL with the ending URL & API key from the request file
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                // https://www.youtube.com/watch?v=CYurQUQwNtk
                const urlParams = new URLSearchParams(new URL(url).search);
                //This sets the TrailerUrl to the video id stored in the param as v=CYurQUQwNtk
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }
    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_postserLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt={movie.name} 
                    />
                ))}
            </div>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
       </div>
    );
};

export default Row