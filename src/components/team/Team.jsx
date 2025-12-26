

import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TeamModal from './TeamModal.jsx';

const Team = ({ headshotImage }) => {
    const [imageData, setImageData] = useState([]);
    const parsedHeadshots = JSON.parse(headshotImage || '[]');
    const [showModal, setShowModal] = useState(false);
    const [profileIndex, setProfileIndex] = useState(null);

    const fakeDescriptions = {
        0: {
            "Name": "Eva Martinez",
            "Title": "Project Manager: Ensuring seamless collaboration and timely delivery.",
            "bio": "Eva has over 10 years of experience in project management, specializing in agile methodologies and team leadership. She is passionate about fostering a collaborative work environment and driving projects to successful completion."

        },

        1: {
            "Name": "Bob Smith",
            "Title": "UX Specialist: Enhancing user experiences through intuitive design.",
            "bio": "Bob is a seasoned UX specialist with a keen eye for detail. With a background in psychology and design, he focuses on creating user-centric solutions that are both functional and aesthetically pleasing."
        },
        2: {
            "Name": "Catherine Lee",
            "Title": "Visual Artist: Bringing concepts to life with vibrant visuals.",
            "bio": "Catherine is a talented visual artist known for her innovative approach to design. Her work spans various mediums, and she excels at translating complex ideas into compelling visual narratives."
        },
        3: {
            "Name": "Alice Johnson",
            "Title": "Lead Designer: Crafting innovative solutions with a keen eye for detail.",
            "bio": "Alice is a creative lead designer with a passion for innovation and detail. She has a strong background in graphic design and excels at developing unique visual concepts that drive brand identity."
        },
        4: {
            "Name": "David Kim",
            "Title": "Frontend Developer: Building responsive and engaging web interfaces.",
            "bio": "David is a skilled frontend developer with expertise in modern web technologies. He is dedicated to creating responsive and user-friendly interfaces that enhance the overall user experience."
        },
        5: {
            "Name": "Sophia Patel",
            "Title": "Content Strategist: Creating compelling narratives that resonate with audiences.",
            "bio": "Sophia is an experienced content strategist with a talent for storytelling. She specializes in developing content strategies that align with business goals and engage target audiences effectively."
        },
        6: {
            "Name": "Michael Brown",
            "Title": "Backend Developer: Ensuring robust and scalable server-side solutions.",
            "bio": "Michael is a proficient backend developer with a focus on building scalable and efficient server-side applications. He has extensive experience in database management and API development."
        }
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
        <>  {showModal ? <TeamModal index={profileIndex} name={fakeDescriptions[profileIndex]?.Name} bio={fakeDescriptions[profileIndex]?.bio} show={showModal} onHide={() => setShowModal(false)} /> : null}
            <div className="team-container">

                <div className="team-grid">
                    {imageData.map((url, index) => (
                        <div className="image-container">
                            <div key={index} className="team-card">
                                <div   >
                                    <Image
                                        loading="lazy"
                                        className="Headshot"
                                        onClick={() => {
                                            setShowModal(true)
                                            setProfileIndex(index);
                                        }}
                                        src={url.url}
                                        alt={`Image ${index + 1}`}
                                        fluid

                                    />
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href={url.photographerSite}>Photographer: {url.name}</a></div>
                            <div className="team-info">


                                {fakeDescriptions[index] ? <div className="bios">{fakeDescriptions[index].Name} <br /> {fakeDescriptions[index].Title}</div> : null}

                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Team;