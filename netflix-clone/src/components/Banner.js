import React, { useEffect, useState} from 'react';
import axios from '../axios';
import requests from '../request';
import "../css/banner.css";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrigionals);
            setMovie(
                request.data.results[
                   Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    // This function will truncate a string and add an ellipsis to the end of the string
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n -1 ) + "..." : str;
    }

    return (
        // adding the different classNames for the divs will help with styling.
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_contents">
            {/* Title */}
            <h1 className="banner_title">
                {/* this is using a ? and an or || as an alternitave to a longer if else statement */}
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/* div > 2 buttons */}
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            {/* description */}
            <h1 className="banner_description">
                {/* The truncate string will keep the description to 200 characters and add an ellipsis */}
                {truncate(movie?.overview, 200)}
            </h1>

            <div className="fadeBottom"></div>
            </div>
        </header>
    )
}

export default Banner
