import React from 'react';
import Form from 'react-bootstrap/Form'

function DailyPlan({day}) {
    return (
        <>
            <b>Daily Plan:</b> {day}
            <Form.Group className="mb-3" controlId={`formBasicLearningTarget_${day}`}>
                <Form.Label>Daily Learning Target:</Form.Label>
                <Form.Control type="text" placeholder="Enter daily learning target" />
            </Form.Group>
            <Form.Group className="mb-3" controlId={`formBasicActivity_${day}`}>
                <Form.Label>Activity/Activities:</Form.Label>
                <br />
                <input type="checkbox" value="numberTalk"/> <span>Number talk</span>
                <br />
                <input type="checkbox" value="video"/> <span>Video</span>
                <br />
                <input type="checkbox" value="kahoot"/> <span>Kahoot</span>
                <br />
                <input type="checkbox" value="game"/> <span>Game</span>
                <br />
                <input type="checkbox" value="book"/> <span>Book</span>
                <br />
                <input type="checkbox" value="craft"/> <span>Craft</span>
                <br />
                <Form.Label>Description of Activity/Activities:</Form.Label>
                <Form.Control type="text" placeholder="Enter acitivity/activities description" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Hook:</Form.Label>
                <Form.Control type="text" placeholder="Enter lesson hook" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Lesson:</Form.Label>
                <Form.Control type="text" placeholder="Enter lesson description/information" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Assessment/Graded Assignment:</Form.Label>
                <br />
                <input type="checkbox" value="quiz"/> <span>Quiz</span>
                <br />
                <input type="checkbox" value="test"/> <span>Test</span>
                <br />
                <input type="checkbox" value="independentWork"/> <span>Independent Work/Worksheet</span>
                <br />
                <input type="checkbox" value="observation"/> <span>Observation</span>
                <Form.Control type="text" placeholder="Enter assessment/graded assignment description" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Accommodations/Differentiation:</Form.Label>
                <br />
                <input type="checkbox" value="smallGroup"/> <span>Small Group</span>
                <br />
                <input type="checkbox" value="repeatDirections"/> <span>Repeat Directions</span>
                <br />
                <input type="checkbox" value="visuals"/> <span>Visual Supports</span>
                <br />
                <input type="checkbox" value="chunk"/> <span>Chunk assignments/directions</span>
                <br />
                <input type="checkbox" value="1to2stepDir"/> <span>1-2 step directions/scaffold instructions</span>
                <br />
                <input type="checkbox" value="manipulatives"/> <span>Manipulatives</span>
                <br />
                <input type="checkbox" value="readAloud"/> <span>Read aloud directions</span>
                <br />
                <input type="checkbox" value="copyOfNotes"/> <span>Copy of notes/fill-in-the-blank</span>
                <br />
                <input type="checkbox" value="other"/> <span>Other</span>
                <Form.Control type="text" placeholder="Description of other accommodation(s)" />
            </Form.Group>

            <hr />

        </>
    )
}

export default DailyPlan;
