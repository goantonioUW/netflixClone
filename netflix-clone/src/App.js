import React from 'react';
import Row from './Row';
import './App.css';
import requests from './request';


function App() {
  return (
    <div className="app"> 
      {/* Navbar */}
      {/* Banner */}
      <Row title="NETFLIX ORIGINALS" 
      fetchURL={requests.fetchNetflixOrigionals} 
      isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIES" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
