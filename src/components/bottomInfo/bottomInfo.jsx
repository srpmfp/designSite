import React from 'react';
import './bottomInfo.css'
import DS from '../../ds.jsx'
import { Container, Row, Col } from 'react-bootstrap';



const BottomInfo = () => {
    const [location, setLocation] = React.useState('bottom-center');

    return (
        <Container fluid className="bottom-info" style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
            <Row className="text-center">
                <Col md={4} sm={12} className="mb-3">
                    <h5>Contact Us</h5>
                    <p>Email:</p>
                </Col>
                <Col md={4} sm={12} className="mb-3">
                    <h5>Follow Us</h5>
                    <p>Social Media Links</p>
                </Col>
                <Col md={4} sm={12} className="mb-3">
                    <h5>Address</h5>
                    <p>123 Design St, Creativity City, DC 12345</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p>All images and videos are sourced from</p>
                </Col>  <div >
                    <a href="https://www.pexels.com">
                        <img alt="Pexels logo" style={{ width: '10ch', background: 'black', padding: '1em', borderRadius: '1em' }} src="https://images.pexels.com/lib/api/pexels-white.png" />
                    </a>
                </div>
            </Row>
            {DS(location)}
        </Container>
    );
}

export default BottomInfo;