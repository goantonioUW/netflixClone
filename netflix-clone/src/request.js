const API_KEY = "420fab02250cbb811d015422f3e6a0cc";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrigionals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?pai_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
