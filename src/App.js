import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState, useEffect } from 'react';



function App() {
  const [productImage, setProductImage] = useState([]);
  const [headshotImage, setHeadshotImage] = useState([]);
  const [buildingVideos, setBuildingVideos] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);

  const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;


  useEffect(() => {

    const imageCall = async () => {

      // fetch images prior to rendering for faster load times
      try {
        const headers = {
          'Authorization': API_KEY,
        }
        const response = await fetch("https://api.pexels.com/v1/collections/bt0yyfk", {
          method: 'GET',
          headers: headers,
        }

        )
        const response2 = await fetch("https://api.pexels.com/v1/collections/goyqqdb", {
          method: 'GET',
          headers: headers,
        })
        const response3 = await fetch("https://api.pexels.com/v1/collections/wyxjgak", {
          method: 'GET',
          headers: headers,
        })
        if (!response.ok || !response2.ok || !response3.ok) {
          throw new Error(`HTTP error! status: ${response.status} ${response2.status} ${response3.status}`);
        }

        //products

        const data = await response.json();

        //headshots
        const data2 = await response2.json();

        //building Videos
        const data3 = await response3.json();

        setProductImage(data.media)
        setHeadshotImage(data2.media)

        localStorage.setItem('productImages', JSON.stringify(data.media));
        localStorage.setItem('headshotImages', JSON.stringify(data2.media));
        localStorage.setItem('buildingVideos', JSON.stringify(data3.media));
        return
      }

      catch (error) {
        console.error("Error fetching image:", error);
        return
      }

    }
    // storing images in local storage to reduce API calls
    const storedProductImages = localStorage.getItem('productImages');
    const storedHeadshotImages = localStorage.getItem('headshotImages');
    const storedBuildingVideos = localStorage.getItem('buildingVideos');

    if (storedProductImages) {
      try {



        const parsedProductImages = JSON.parse(storedProductImages);
        const parsedHeadshotImages = JSON.parse(storedHeadshotImages);
        const parsedBuildingVideos = JSON.parse(storedBuildingVideos);

        setProductImage(parsedProductImages);
        setHeadshotImage(parsedHeadshotImages);
        setBuildingVideos(parsedBuildingVideos);

      } catch (error) {

        console.error("Error parsing stored images:", error);
        imageCall(); // Fallback to API call if parsing fails

      }
    } else {
      imageCall();
    }




  }, []);

  // Video timing effect
  useEffect(() => {
    if (buildingVideos.length === 0) return;

    const interval = setInterval(() => {

      setVideoIndex((prevIndex) => (prevIndex + 1) % buildingVideos.length);

    }, 5000);


    return () => clearInterval(interval);

  }

    , [buildingVideos]);

  const currentVideo = buildingVideos.length > 0 ? buildingVideos[videoIndex] : null;

  return (<div className="App screenSection">

    {currentVideo && (
      <video
        key={currentVideo.id}
        className="building-video"
        autoPlay
        muted
        loop
      >
        <source src={currentVideo.video_files[0].link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}

    <section className="cardContainer cover-left">
      <header className="App-header">
        <h1>Welcome to the Design Site</h1>
      </header>
    </section>
    <section className="cardContainer cover-right">
      <header className="App-header">
        <h1>Welcome to the Design Site</h1>
      </header>
    </section>
    <section className="cardContainer left">
      <header className="App-header">
        <h1>Welcome to the Design Site</h1>
      </header>
    </section>
  </div>
  );
}

export default App;
