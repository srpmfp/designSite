
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
const TeamModal = (props) => {
    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>{props.name}</Modal.Header>
        <Modal.Body>
            <h4>Bio</h4>
            <p>
                {props.bio}
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>)
}

export default TeamModal;