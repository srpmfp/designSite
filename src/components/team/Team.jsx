

import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'

const Team = ({ headshotImage }) => {
    const [imageData, setImageData] = useState([]);
    const parsedHeadshots = JSON.parse(headshotImage || '[]');

    const fakeDescriptions = {
        0: "Eva Martinez - Project Manager: Ensuring seamless collaboration and timely delivery.",
        1: "Bob Smith - UX Specialist: Enhancing user experiences through intuitive design.",
        2: "Catherine Lee - Visual Artist: Bringing concepts to life with vibrant visuals.",
        4: "David Kim - Frontend Developer: Building responsive and engaging web interfaces.",
        3: "Alice Johnson - Lead Designer: Crafting innovative solutions with a keen eye for detail."
    }
    useEffect(() => {
        try {
            if (parsedHeadshots.length > 0) {
                const urls = parsedHeadshots.map((img) => {
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

    }, [headshotImage]);



    return (
        <div className="screenSection">

            <div className="cardContainer cover-left">
                {imageData.map((url, index) => (
                    <div key={index}  >
                        <Image
                            loading="lazy"
                            className="Headshot"
                            src={url.url}
                            alt={`Image ${index + 1}`}
                            fluid

                        />

                        <div className=""> <a target="_blank" rel="noopener noreferrer" href={url.photographerSite}>Photographer: {url.name}</a></div>
                        {fakeDescriptions[index] ? <div className="descriptions">{fakeDescriptions[index]}</div> : null}
                        <div className="pexels-logo">
                            <a className="pexels-link" href="https://www.pexels.com">
                                <img alt="Pexels logo" src="https://images.pexels.com/lib/api/pexels-white.png" />
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Team;