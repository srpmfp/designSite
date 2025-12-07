
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import ImageCards from '../imageCards/imageCards.jsx'
const Testimonials = () => {
    const [image, setImage] = useState();

    const imageCall = async () => {
        try {

            const key = process.env.PEXEL_API_KEY
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': key
            }
            const response = await fetch("https://api.pexels.com/v1/collections/bt0yyfk", {
                method: 'GET',
                headers: headers,
            }
            )
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



    return (
        <div className="screenSection  ">

            <div className="cardContainer cover-left">
                <Button onClick={() => imageCall()}>Fetch Image</Button>
                <ImageCards image={image} />
                <h2>What Our Customers Say</h2>
                <div className="testimonial">

                    <p>"This is the best service I've ever used!"</p>
                    <h4>- Happy Customer</h4>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;