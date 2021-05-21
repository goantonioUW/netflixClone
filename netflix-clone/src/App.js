import React from 'react';
import Row from './components/Row';
import './css/App.css';
import requests from './request';
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app"> 
     <Nav />
     <Banner />
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
