import Image from 'react-bootstrap/Image'
import { useState, useEffect } from 'react'
import './imageCards.css'

const ImageCards = ({ image }) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [photographer, setPhotographer] = useState([]);

    useEffect(() => {
        try {
            // Check if image is an array (data.media from Pexels API)
            if (Array.isArray(image) && image.length > 0) {
                const urls = image.map((img) => {
                    return {
                        url: img.src.original || img.src.large,
                        name: img.photographer || "Unknown"
                    }


                });

                setImageUrls(urls)
            }
        } catch (error) {
            console.error("Error setting image URLs:", error);
        }
    }, [image]);

    // Debug logs
    console.log("Image prop:", image);
    console.log("ImageUrls state:", imageUrls);
    console.log("Photographer state:", photographer);

    if (!imageUrls.length) {
        return <div>No images available</div>;
    }

    return (
        <div className="imageCont" >

            {imageUrls.map((url, index) => (
                <div className="imageCard" key={index}>
                    <Image
                        key={index}
                        src={url.url}
                        alt={`Image ${index + 1}`}
                        style={{ width: 'auto', height: '100%', zIndex: -1 }}
                        fluid

                    />
                    <div className="photographer" key={index}>{url.name}</div>
                </div>
            ))}




        </div>
    );
}

export default ImageCards;