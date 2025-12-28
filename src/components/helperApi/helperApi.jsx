import './helperApi.css'
import { useState } from 'react';
import { InputGroup, Button } from 'react-bootstrap';

const HelperApi = () => {
    const [showBubble, setShowBubble] = useState(false);
    const [userQuestion, setUserQuestion] = useState('');
    const [userInput, setUserInput] = useState('');


    return (
        <div>
            {showBubble && (
                <div className="bubble active">

                    <button
                        onClick={() => setShowBubble(false)}
                        className="close-btn"
                        style={{ float: 'right', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
                    >
                        &times; {/* × symbol */}
                    </button>

                    {userQuestion && <p>{userQuestion}</p>}
                    <div>
                        How can we help?
                    </div>
                    <InputGroup className="helperInput">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your question here..."
                            aria-label="User question"
                            onChange={(e) => setUserInput(e.target.value)}


                        />
                        <Button onClick={() => { setUserQuestion(userInput) }} variant="primary" id="button-addon2">
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