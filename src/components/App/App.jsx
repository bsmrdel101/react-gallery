import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

// Import components
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';

function App() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
