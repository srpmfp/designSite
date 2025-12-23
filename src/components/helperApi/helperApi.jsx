import './helperApi.css'
import { useState } from 'react';
import { InputGroup, Button } from 'react-bootstrap';

const HelperApi = () => {
    const [showBubble, setShowBubble] = useState(false);

    return (
        <div>
            {showBubble && (
                <div className="bubble active">
                    <div>
                        How can we help?
                        <button
                            onClick={() => setShowBubble(false)}
                            className="close-btn"
                            style={{ float: 'right', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
                        >
                            &times; {/* × symbol */}
                        </button>

                    </div>
                    <InputGroup className="helperInput">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your question here..."
                            aria-label="User question"
                        />
                        <Button variant="primary" id="button-addon2">
                            Send
                        </Button>
                    </InputGroup>

                </div>
            )}
            <div onClick={() => setShowBubble(!showBubble)} className="helperApi">
                helperApi
            </div>
        </div>
    );
};

export default HelperApi;