
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import ImageCards from '../imageCards/imageCards.jsx'

const Testimonials = ({ images }) => {

    return (
        <div className="screenSection">

            <div className="cardContainer cover-left">
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