import Image from 'react-bootstrap/Image'
import { useState, useEffect } from 'react'
import './imageCards.css'

const ImageCards = ({ image }) => {
    const [imageData, setImageData] = useState([]);
    const fakeDescriptions = {
        0: "Spacious design spaces specifically for creative minds.",
        1: "Modern, open-concept work areas to inspire innovation.",
        2: "Bringing ideas to life in our collaborative studios.",
        3: "Where creativity meets functionality in every corner.",
        4: "A hub for designers to connect and create together."
    }


    useEffect(() => {
        try {
            // Check if image is an array (data.media from Pexels API)
            if (image.length > 0) {
                const urls = image.map((img) => {
                    return {
                        url: img.src.original || img.src.large,
                        name: img.photographer || "Unknown",
                        photographerSite: img.photographer_url || "https://www.pexels.com"
                    }


                });

                setImageData(urls)
            }
        } catch (error) {
            console.error("Error setting image URLs:", error);
        }
    }, [image]);

    // Debug logs
    console.log("Image prop:", image);
    console.log("imageData state:", imageData);


    if (!imageData.length) {
        return <div>No images available</div>;
    }

    return (
        <div className="imageCont" >

            {imageData.map((url, index) => (
                <div key={index} className="imageCard" >
                    <Image

                        src={url.url}
                        alt={`Image ${index + 1}`}
                        style={{ width: 'auto', maxWidth: '100%', height: '100%', zIndex: -10, objectFit: 'cover' }}
                        fluid

                    />
                    <div className="photographer"> <a target="_blank" rel="noopener noreferrer" href={url.photographerSite}>Photographer: {url.name}</a></div>
                    {fakeDescriptions[index] ? <div className="descriptions">{fakeDescriptions[index]}</div> : null}
                    <div className="pexels-logo">
                        <a className="pexels-link" href="https://www.pexels.com">
                            <img src="https://images.pexels.com/lib/api/pexels-white.png" />
                        </a>
                    </div>
                </div>
            ))}




        </div>
    );
}

export default ImageCards;