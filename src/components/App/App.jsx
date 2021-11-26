import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Import components
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';

const getGallery = () => {
  axios({
    method: 'GET',
    url: '/gallery'
  })
  .then((response) => {
    console.log('Gallery List: ', response.data);
    setGalleryList(response.data);
  })
  .catch((error) => {
    console.log('error: ', error);
  });
}

function App() {
  let [galleryList, setGalleryList] = useState([]);

  //On load, get gallery items
  useEffect(() => {
    getGallery();
  }, []);

  return (
    <div className="App">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
