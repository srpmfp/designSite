
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import './Team.css'
import '../imageCards/imageCards.css'
const TeamModal = (props) => {
    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
        className="team-modal"
    >
        <Modal.Header closeButton>{props.name}</Modal.Header>
        <Image src={props.url.url} alt={props.name} fluid />
        <a className="photographer" target="_blank" rel="noopener noreferrer" href={props.url.photographerSite}>Photographer: {props.url.name}</a>
        <Modal.Body>

            <h4>Bio</h4>
            <p>
                {props.bio}
            </p>
        </Modal.Body>

    </Modal>)
}

export default TeamModal;