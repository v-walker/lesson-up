import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DailyPlan({day, handleSaveDailyPlan}) {
    const [learningTarget, setLearningTarget] = useState("");

    // activity checkboxes
    const [numberTalk, setNumberTalk] = useState(false);
    const [video, setVideo] = useState(false);
    const [kahoot, setKahoot] = useState(false);
    const [game, setGame] = useState(false);
    const [book, setBook] = useState(false);
    const [craft, setCraft] = useState(false);
    const [activities, setActivities] = useState([])
    
    // user input fields
    const [activityDescrip, setActivityDescrip] = useState("");
    const [hook, setHook] = useState("");
    const [lesson, setLesson] = useState("");

    // assessment methods
    const [quiz, setQuiz] = useState(false);
    const [test, setTest] = useState(false);
    const [independentWork, setIndependentWork] = useState(false);
    const [observation, setObservation] = useState(false);
    const [assessmentMethods, setAssessmentMethods] = useState([])

    const [assessmentDescription, setAssessmentDescription] = useState("");

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
    const [acommodations, setAcommodations] = useState([]);

    const [otherAccDescription, setOtherAccDescription] = useState("");

    const addCheckedItem = (state, value, array, setterForArray, setterForItem) => {
        setterForItem(!state)
        
        let isFound = array.find(string => string === value);

        if (isFound) {
            let updatedArray = array.filter(string => string !== isFound);
            setterForArray(updatedArray)
        } else {
            setterForArray([...array, value])
        }
    }
    
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
                <input type="checkbox" value="Number Talk" checked={numberTalk} onChange={(e) => addCheckedItem(numberTalk, e.target.value, activities, setActivities, setNumberTalk)}/> <span>Number talk</span>
                <br />
                <input type="checkbox" value="video" checked={video} onChange={(e) => addCheckedItem(video, e.target.value, activities, setActivities, setVideo)}/> <span>Video</span>
                <br />
                <input type="checkbox" value="kahoot" checked={kahoot} onChange={(e) => addCheckedItem(kahoot, e.target.value, activities, setActivities, setKahoot)}/> <span>Kahoot</span>
                <br />
                <input type="checkbox" value="game" checked={game} onChange={(e) => addCheckedItem(game, e.target.value, activities, setActivities, setGame)}/> <span>Game</span>
                <br />
                <input type="checkbox" value="book" checked={book} onChange={(e) => addCheckedItem(book, e.target.value, activities, setActivities, setBook)}/> <span>Book</span>
                <br />
                <input type="checkbox" value="craft" checked={craft} onChange={(e) => addCheckedItem(craft, e.target.value, activities, setActivities, setCraft)}/> <span>Craft</span>
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
                <input type="checkbox" value="quiz" name="quiz" checked={quiz} onChange={(e) => addCheckedItem(quiz, e.target.value, assessmentMethods, setAssessmentMethods, setQuiz)}/> <span>Quiz</span>
                <br />
                <input type="checkbox" value="test" name="test" checked={test} onChange={(e) => addCheckedItem(test, e.target.value, assessmentMethods, setAssessmentMethods, setTest)}/> <span>Test</span>
                <br />
                <input type="checkbox" value="Independent Work/Worksheet" name="independent" checked={independentWork} onChange={(e) => addCheckedItem(independentWork, e.target.value, assessmentMethods, setAssessmentMethods, setIndependentWork)}/> <span>Independent Work/Worksheet</span>
                <br />
                <input type="checkbox" value="observation" name="observation" checked={observation} onChange={(e) => addCheckedItem(observation, e.target.value, assessmentMethods, setAssessmentMethods, setObservation)}/> <span>Observation</span>
                <Form.Control type="text" placeholder="Enter assessment/graded assignment description" value={assessmentDescription} onChange={(e) => setAssessmentDescription(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Accommodations/Differentiation:</Form.Label>
                <br />
                <input type="checkbox" value="Small Group" checked={smallGroup} onChange={(e) => addCheckedItem(smallGroup, e.target.value, acommodations, setAcommodations, setSmallGroup)}/> <span>Small Group</span>
                <br />
                <input type="checkbox" value="Repeat Directions" checked={repeatDirections} onChange={(e) => addCheckedItem(repeatDirections, e.target.value, acommodations, setAcommodations, setRepeatDirections)}/> <span>Repeat Directions</span>
                <br />
                <input type="checkbox" value="Visual Supports" checked={visuals} onChange={(e) => addCheckedItem(visuals, e.target.value, acommodations, setAcommodations, setVisuals)}/> <span>Visual Supports</span>
                <br />
                <input type="checkbox" value="Chunk assignments/directions" checked={chunk} onChange={(e) => addCheckedItem(chunk, e.target.value, acommodations, setAcommodations, setChunk)}/> <span>Chunk assignments/directions</span>
                <br />
                <input type="checkbox" value="1-2 step directions/scaffold instructions" checked={scaffoldInstructions} onChange={(e) => addCheckedItem(scaffoldInstructions, e.target.value, acommodations, setAcommodations, setScaffoldInstructions)}/> <span>1-2 step directions/scaffold instructions</span>
                <br />
                <input type="checkbox" value="Manipulatives" checked={manipulatives} onChange={(e) => addCheckedItem(manipulatives, e.target.value, acommodations, setAcommodations, setManipulatives)}/> <span>Manipulatives</span>
                <br />
                <input type="checkbox" value="Read aloud directions" checked={readAloud} onChange={(e) => addCheckedItem(readAloud, e.target.value, acommodations, setAcommodations, setReadAloud)}/> <span>Read aloud directions</span>
                <br />
                <input type="checkbox" value="Copy of notes/fill-in-the-blank" checked={notes} onChange={(e) => addCheckedItem(notes, e.target.value, acommodations, setAcommodations, setNotes)}/> <span>Copy of notes/fill-in-the-blank</span>
                <br />
                <input type="checkbox" value="Other" checked={other} onChange={(e) => addCheckedItem(other, e.target.value, acommodations, setAcommodations, setOther)}/> <span>Other</span>
                <Form.Control type="text" placeholder="Description of other accommodation(s)" value={otherAccDescription} onChange={(e) => setOtherAccDescription(e.target.value)} />
            </Form.Group>

            <Button onClick={(e) => handleSaveDailyPlan({learningTarget, activities, activityDescrip, assessmentMethods, assessmentDescription, acommodations, otherAccDescription})}>Save {day}</Button>
            <hr />

        </>
    )
}

export default DailyPlan;
