import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState, useEffect } from 'react';



function App() {
  const [productImage, setProductImage] = useState([]);
  const [headshotImage, setHeadshotImage] = useState([]);
  const [buildingVideos, setBuildingVideos] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

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
    if (videoIndex.length === buildingVideos.length) {
      const style = {
        visible: 'hidden',

      }
      const videoElement = document.querySelector('.building-video');
      videoElement.style.visibility = style.visible;
      return;
    }
    else {
      const interval = setInterval(() => {
        setVideoIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // Stop at the last video
          if (nextIndex >= buildingVideos.length) {
            return prevIndex + 1; // Stay at current index
          } else

            console.log("Video Index:", nextIndex);
          return nextIndex;
        });
      }, 3000);

      return () => clearInterval(interval);


    }

  }

    , [buildingVideos, videoIndex, videoCount]);

  const currentVideo = buildingVideos.length > 0 ? buildingVideos[videoIndex] : null;
  const textArray = [
    "Innovative Designs",
    "Creative Solutions",
    "User-Centered Approach",
    "Cutting-Edge Technology"
  ];

  const currentText = buildingVideos.length > 0 ? [textArray[videoIndex]] : [];

  return (<div className="App">


    {currentVideo && (<>
      <video
        loading="eager"
        key={currentVideo.id}
        className="building-video"
        autoPlay
        muted
        loop
      >
        <source src={currentVideo.video_files[0].link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>  <section className="screenSection ">



        <div className='cardContainer-right'>
          <h1>{currentText}</h1>
        </div>
      </section>
    </>
    )}

  </div>
  );
}

export default App;
