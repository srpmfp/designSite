
import './App.css';
import Heading from './components/heading/Heading';
import Products from './components/products/Products';
import Testimonials from './components/testimonials/Testimonials';
import Nav from './components/nav/Nav';
import { useState, useEffect } from 'react';
import HelperApi from './components/helperApi/helperApi.jsx';


function App() {
  const [image, setImage] = useState();

  const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;

  useEffect(() => {

    const imageCall = async () => {

      try {

        const headers = {
          'Authorization': API_KEY,
        }
        const response = await fetch("https://api.pexels.com/v1/collections/bt0yyfk", {
          method: 'GET',
          headers: headers,
        }
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImage(data.media)
        console.log(data.media)





        return

      }
      catch (error) {
        console.error("Error fetching image:", error);
        return
      }
    }

    if (!localStorage.getItem('images') || !image || image.length === 0) {
      imageCall();
      localStorage.setItem('images', JSON.stringify(image));
    }
    else {
      const parsedImages = (localStorage.getItem('images'));
      setImage(parsedImages);
      //
    };
  }, [API_KEY, image]);


  return (
    <div className="App">
      <HelperApi />
      <Nav />
      <Heading />
      <Products images={image} />
      <Testimonials images={image} />

    </div>
  );
}

export default App;
