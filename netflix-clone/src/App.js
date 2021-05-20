import React from 'react';
import Row from './Row';
import './App.css';
import requests from './request';


function App() {
  return (
    <div className="App"> 
      <h1>Lets build this</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOrigionals} />
      <Row title="TRENDING ROW" fetchURL={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
