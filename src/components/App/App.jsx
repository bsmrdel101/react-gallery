import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Import components
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';


function App() {
  let [galleryList, setGalleryList] = useState([]);

  //On load, get gallery items
  useEffect(() => {
    getGallery();
  }, []);

  // Axios GET request
    // Gets the array data from the server
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('Gallery List: ', response.data);
      // Sets 'galleryList' equal to the array that axios brought back.
      setGalleryList(response.data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  }

  return (
    <div className="App">
      <Header />
      <Gallery galleryList={galleryList}/>
    </div>
  );
}

export default App;