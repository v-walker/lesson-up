import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DailyPlan({day}) {
    const [learningTarget, setLearningTarget] = useState("");

    // activity checkboxes
    const [numberTalk, setNumberTalk] = useState(false);
    const [video, setVideo] = useState(false);
    const [kahoot, setKahoot] = useState(false);
    const [game, setGame] = useState(false);
    const [book, setBook] = useState(false);
    const [craft, setCraft] = useState(false);
    
    // user input fields
    const [activityDescrip, setActivityDescrip] = useState("");
    const [hook, setHook] = useState("");
    const [lesson, setLesson] = useState("");

    // assessment methods
    const [quiz, setQuiz] = useState(false);
    const [test, setTest] = useState(false);
    const [independentWork, setIndependentWork] = useState(false);
    const [observation, setObservation] = useState(false);
    const [assessmentDescription, setAssessmentDescription] = useState(false);

    // accommodations
    const [smallGroup, setSmallGroup] = useState(false);
    const [repeatDirections, setRepeatDirections] = useState(false);
    const [visuals, setVisuals] = useState(false);
    const [chunk, setChunk] = useState(false);
    const [scaffoldInstructions, setScaffoldInstructions] = useState(false);
    const [manipulatives, setManipulatives] = useState(false);
    const [readAloud, setReadAloud] = useState(false);
    const [notes, setNotes] = useState(false);
    const [other, setOther] = useState(false);
    const [otherAccDescription, setOtherAccDescription] = useState("");
    
    return (
        <>
            <h3><b>Daily Plan:</b> {day}</h3>
            <Form.Group className="mb-3" controlId={`formBasicLearningTarget_${day}`}>
                <Form.Label>Daily Learning Target:</Form.Label>
                <Form.Control type="text" placeholder="Enter daily learning target" value={learningTarget} onChange={(e) => setLearningTarget(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId={`formBasicActivity_${day}`}>
                <Form.Label>Activity/Activities:</Form.Label>
                <br />
                <input type="checkbox" value="Number Talk" checked={numberTalk} onChange={() => setNumberTalk(!numberTalk)}/> <span>Number talk</span>
                <br />
                <input type="checkbox" value="video" checked={video} onChange={() => setVideo(!video)}/> <span>Video</span>
                <br />
                <input type="checkbox" value="kahoot" checked={kahoot} onChange={() => setKahoot(!kahoot)}/> <span>Kahoot</span>
                <br />
                <input type="checkbox" value="game" checked={game} onChange={() => setGame(!game)}/> <span>Game</span>
                <br />
                <input type="checkbox" value="book" checked={book} onChange={() => setBook(!book)}/> <span>Book</span>
                <br />
                <input type="checkbox" value="craft" checked={craft} onChange={() => setCraft(!craft)}/> <span>Craft</span>
                <br />
                <Form.Label>Description of Activity/Activities:</Form.Label>
                <Form.Control type="text" placeholder="Enter acitivity/activities description" value={activityDescrip} onChange={(e) => setActivityDescrip(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Hook:</Form.Label>
                <Form.Control type="text" placeholder="Enter lesson hook" value={hook} onChange={(e) => setHook(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Lesson:</Form.Label>
                <Form.Control type="text" placeholder="Enter lesson description/information" value={lesson} onChange={(e) => setLesson(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Assessment/Graded Assignment:</Form.Label>
                <br />
                <input type="checkbox" value="quiz" checked={quiz} onChange={() => setQuiz(!quiz)}/> <span>Quiz</span>
                <br />
                <input type="checkbox" value="test" checked={test} onChange={() => setTest(!test)}/> <span>Test</span>
                <br />
                <input type="checkbox" value="Independent Work/Worksheet" checked={independentWork} onChange={() => setIndependentWork(!independentWork)}/> <span>Independent Work/Worksheet</span>
                <br />
                <input type="checkbox" value="observation" checked={observation} onChange={() => setObservation(!observation)}/> <span>Observation</span>
                <Form.Control type="text" placeholder="Enter assessment/graded assignment description" value={assessmentDescription} onChange={(e) => setAssessmentDescription(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Accommodations/Differentiation:</Form.Label>
                <br />
                <input type="checkbox" value="Small Group" checked={smallGroup} onChange={() => setSmallGroup(!smallGroup)}/> <span>Small Group</span>
                <br />
                <input type="checkbox" value="Repeat Directions" checked={repeatDirections} onChange={() => setRepeatDirections(!repeatDirections)}/> <span>Repeat Directions</span>
                <br />
                <input type="checkbox" value="Visual Supports" checked={visuals} onChange={() => setVisuals(!visuals)}/> <span>Visual Supports</span>
                <br />
                <input type="checkbox" value="Chunk assignments/directions" checked="Chunk assignments/directions" checked={chunk} onChange={() => setChunk(!chunk)}/> <span>Chunk assignments/directions</span>
                <br />
                <input type="checkbox" value="1-2 step directions/scaffold instructions" checked={scaffoldInstructions} onChange={() => setScaffoldInstructions(!scaffoldInstructions)}/> <span>1-2 step directions/scaffold instructions</span>
                <br />
                <input type="checkbox" value="Manipulatives" checked={manipulatives} onChange={() => setManipulatives(!manipulatives)}/> <span>Manipulatives</span>
                <br />
                <input type="checkbox" value="Read aloud directions" checked={readAloud} onChange={() => setReadAloud(!readAloud)}/> <span>Read aloud directions</span>
                <br />
                <input type="checkbox" value="Copy of notes/fill-in-the-blank" checked={notes} onChange={() => setNotes(!notes)}/> <span>Copy of notes/fill-in-the-blank</span>
                <br />
                <input type="checkbox" value="Other" checked={other} onChange={() => setOther(!other)}/> <span>Other</span>
                <Form.Control type="text" placeholder="Description of other accommodation(s)" value={otherAccDescription} onChange={(e) => setOtherAccDescription(e.target.value)} />
            </Form.Group>

            <Button>Save {day}</Button>
            <hr />

        </>
    )
}

export default DailyPlan;
