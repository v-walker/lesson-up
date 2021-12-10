import React, {useState} from 'react';
import { useSelector } from 'react-redux';

// bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DailyPlan({day, handleSaveDailyPlan}) {
    // saved values from redux global state
    const savedNoSchool = useSelector(state => state.planCRD.dailyPlans[day].noSchool);
    const savedLearningTarget = useSelector(state => state.planCRD.dailyPlans[day].learningTarget);
    const savedActivities = useSelector(state => state.planCRD.dailyPlans[day].activities);
    // console.log(savedActivities);

    let savedNumberTalk;
    let savedVideo;
    let savedKahoot;
    let savedGame;
    let savedBook;
    let savedCraft;
        if (savedActivities) {
            savedNumberTalk = savedActivities.includes("Number talk");
            savedVideo = savedActivities.includes("Video");
            savedKahoot = savedActivities.includes("Kahoot");
            savedGame = savedActivities.includes("Game");
            savedBook = savedActivities.includes("Book");
            savedCraft = savedActivities.includes("Craft");
        }

    const savedActivityDescrip = useSelector(state => state.planCRD.dailyPlans[day].activityDescrip);
    const savedHook = useSelector(state => state.planCRD.dailyPlans[day].hook);
    const savedLesson = useSelector(state => state.planCRD.dailyPlans[day].lesson);
    const savedAssessmentMethods = useSelector(state => state.planCRD.dailyPlans[day].assessmentMethods);
    // console.log("assessment", savedAssessmentMethods);

    let savedQuiz;
    let savedTest;
    let savedIndependentWork;
    let savedObservation;
        if (savedAssessmentMethods) {
            savedQuiz = savedActivities.includes("Quiz");
            savedTest = savedActivities.includes("Test");
            savedIndependentWork = savedActivities.includes("Independent work/worksheet");
            savedObservation = savedActivities.includes("Observation");
        }

    const savedAssessmentDescription = useSelector(state => state.planCRD.dailyPlans[day].assessmentDescription);
    const savedAccommodations = useSelector(state => state.planCRD.dailyPlans[day].accommodations);

    let savedSmallGroup;
    let savedRepeatDirections;
    let savedVisuals;
    let savedChunk;
    let savedScaffoldInstructions;
    let savedManipulatives;
    let savedReadAloud;
    let savedNotes;
    let savedOther;
        if (savedAccommodations) {
            savedSmallGroup = savedAccommodations.includes("Small group");
            savedRepeatDirections = savedAccommodations.includes("Repeat directions")
            savedVisuals = savedAccommodations.includes("Visual supports");
            savedChunk = savedAccommodations.includes("Chunk assignments/directions");
            savedScaffoldInstructions = savedAccommodations.includes("1-2 step directions/scaffold instructions");
            savedManipulatives = savedAccommodations.includes("Manipulatives");
            savedReadAloud = savedAccommodations.includes("Read aloud directions");
            savedNotes = savedAccommodations.includes("Copy of notes/fill-in-the-blank");
            savedOther = savedAccommodations.includes("Other");
        }
    
    const savedOtherAccDescription = useSelector(state => state.planCRD.dailyPlans[day].otherAccDescription);
    

    // initial local state values
    const [noSchool, setNoSchool] = useState(savedNoSchool || false);

    const [learningTarget, setLearningTarget] = useState(savedLearningTarget || "");

    // activity checkboxes
    const [numberTalk, setNumberTalk] = useState(savedNumberTalk || false);
    const [video, setVideo] = useState(savedVideo || false);
    const [kahoot, setKahoot] = useState(savedKahoot || false);
    const [game, setGame] = useState(savedGame || false);
    const [book, setBook] = useState(savedBook || false);
    const [craft, setCraft] = useState(savedCraft || false);
    const [activities, setActivities] = useState(savedActivities || [])
    
    // user input fields
    const [activityDescrip, setActivityDescrip] = useState(savedActivityDescrip || "");
    const [hook, setHook] = useState(savedHook || "");
    const [lesson, setLesson] = useState(savedLesson || "");

    // assessment methods
    const [quiz, setQuiz] = useState(savedQuiz || false);
    const [test, setTest] = useState(savedTest || false);
    const [independentWork, setIndependentWork] = useState(savedIndependentWork || false);
    const [observation, setObservation] = useState(savedObservation || false);
    const [assessmentMethods, setAssessmentMethods] = useState(savedAssessmentMethods || []);

    const [assessmentDescription, setAssessmentDescription] = useState(savedAssessmentDescription || "");

    // accommodations
    const [smallGroup, setSmallGroup] = useState(savedSmallGroup || false);
    const [repeatDirections, setRepeatDirections] = useState(savedRepeatDirections || false);
    const [visuals, setVisuals] = useState(savedVisuals ||false);
    const [chunk, setChunk] = useState(savedChunk || false);
    const [scaffoldInstructions, setScaffoldInstructions] = useState(savedScaffoldInstructions || false);
    const [manipulatives, setManipulatives] = useState(savedManipulatives || false);
    const [readAloud, setReadAloud] = useState(savedReadAloud || false);
    const [notes, setNotes] = useState(savedNotes || false);
    const [other, setOther] = useState(savedOther || false);
    const [accommodations, setAccommodations] = useState(savedAccommodations || []);

    const [otherAccDescription, setOtherAccDescription] = useState(savedOtherAccDescription || "");

    const addCheckedItem = (state, value, array, setterForArray, setterForItem) => {
        setterForItem(!state);

        console.log("activities", array);
        
        let isFound = array.find(string => string === value);
        console.log(isFound);

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
            <Form.Group>
                <input type="checkbox" value="No school/holiday" checked={noSchool} onChange={() => setNoSchool(!noSchool)}/>
                <span> No School/Holiday</span>
                <br /> <br />
            </Form.Group>

            <Form.Group className="mb-3" controlId={`formBasicLearningTarget_${day}`}>
                <Form.Label>Daily Learning Target:</Form.Label>
                <Form.Control type="text" placeholder="Enter daily learning target" value={learningTarget} onChange={(e) => setLearningTarget(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId={`formBasicActivity_${day}`}>
                <Form.Label>Activity/Activities:</Form.Label>
                <br />
                <input type="checkbox" value="Number talk" checked={numberTalk} onChange={(e) => addCheckedItem(numberTalk, e.target.value, activities, setActivities, setNumberTalk)}/> <span>Number talk</span>
                <br />
                <input type="checkbox" value="Video" checked={video} onChange={(e) => addCheckedItem(video, e.target.value, activities, setActivities, setVideo)}/> <span>Video</span>
                <br />
                <input type="checkbox" value="Kahoot" checked={kahoot} onChange={(e) => addCheckedItem(kahoot, e.target.value, activities, setActivities, setKahoot)}/> <span>Kahoot</span>
                <br />
                <input type="checkbox" value="Game" checked={game} onChange={(e) => addCheckedItem(game, e.target.value, activities, setActivities, setGame)}/> <span>Game</span>
                <br />
                <input type="checkbox" value="Book" checked={book} onChange={(e) => addCheckedItem(book, e.target.value, activities, setActivities, setBook)}/> <span>Book</span>
                <br />
                <input type="checkbox" value="Craft" checked={craft} onChange={(e) => addCheckedItem(craft, e.target.value, activities, setActivities, setCraft)}/> <span>Craft</span>
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
                <Form.Control as="textarea" rows="5" placeholder="Enter lesson description/information" value={lesson} onChange={(e) => setLesson(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Assessment/Graded Assignment:</Form.Label>
                <br />
                <input type="checkbox" value="Quiz" name="quiz" checked={quiz} onChange={(e) => addCheckedItem(quiz, e.target.value, assessmentMethods, setAssessmentMethods, setQuiz)}/> <span>Quiz</span>
                <br />
                <input type="checkbox" value="Test" name="test" checked={test} onChange={(e) => addCheckedItem(test, e.target.value, assessmentMethods, setAssessmentMethods, setTest)}/> <span>Test</span>
                <br />
                <input type="checkbox" value="Independent work/worksheet" name="independent" checked={independentWork} onChange={(e) => addCheckedItem(independentWork, e.target.value, assessmentMethods, setAssessmentMethods, setIndependentWork)}/> <span>Independent Work/Worksheet</span>
                <br />
                <input type="checkbox" value="Observation" name="observation" checked={observation} onChange={(e) => addCheckedItem(observation, e.target.value, assessmentMethods, setAssessmentMethods, setObservation)}/> <span>Observation</span>
                <Form.Control type="text" placeholder="Enter assessment/graded assignment description" value={assessmentDescription} onChange={(e) => setAssessmentDescription(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Accommodations/Differentiation:</Form.Label>
                <br />
                <input type="checkbox" value="Small group" checked={smallGroup} onChange={(e) => addCheckedItem(smallGroup, e.target.value, accommodations, setAccommodations, setSmallGroup)}/> <span>Small Group</span>
                <br />
                <input type="checkbox" value="Repeat directions" checked={repeatDirections} onChange={(e) => addCheckedItem(repeatDirections, e.target.value, accommodations, setAccommodations, setRepeatDirections)}/> <span>Repeat Directions</span>
                <br />
                <input type="checkbox" value="Visual supports" checked={visuals} onChange={(e) => addCheckedItem(visuals, e.target.value, accommodations, setAccommodations, setVisuals)}/> <span>Visual Supports</span>
                <br />
                <input type="checkbox" value="Chunk assignments/directions" checked={chunk} onChange={(e) => addCheckedItem(chunk, e.target.value, accommodations, setAccommodations, setChunk)}/> <span>Chunk assignments/directions</span>
                <br />
                <input type="checkbox" value="1-2 step directions/scaffold instructions" checked={scaffoldInstructions} onChange={(e) => addCheckedItem(scaffoldInstructions, e.target.value, accommodations, setAccommodations, setScaffoldInstructions)}/> <span>1-2 step directions/scaffold instructions</span>
                <br />
                <input type="checkbox" value="Manipulatives" checked={manipulatives} onChange={(e) => addCheckedItem(manipulatives, e.target.value, accommodations, setAccommodations, setManipulatives)}/> <span>Manipulatives</span>
                <br />
                <input type="checkbox" value="Read aloud directions" checked={readAloud} onChange={(e) => addCheckedItem(readAloud, e.target.value, accommodations, setAccommodations, setReadAloud)}/> <span>Read aloud directions</span>
                <br />
                <input type="checkbox" value="Copy of notes/fill-in-the-blank" checked={notes} onChange={(e) => addCheckedItem(notes, e.target.value, accommodations, setAccommodations, setNotes)}/> <span>Copy of notes/fill-in-the-blank</span>
                <br />
                <input type="checkbox" value="Other" checked={other} onChange={(e) => addCheckedItem(other, e.target.value, accommodations, setAccommodations, setOther)}/> <span>Other</span>
                <Form.Control type="text" placeholder="Enter list/description of other accommodation(s)" value={otherAccDescription} onChange={(e) => setOtherAccDescription(e.target.value)} />
            </Form.Group>

            <br />
            <Button onClick={(e) => handleSaveDailyPlan({noSchool, learningTarget, activities, activityDescrip, hook, lesson, assessmentMethods, assessmentDescription, accommodations, otherAccDescription})}>Save {day}</Button>
            {/* <Button className="ms-2 btn-warning">Update {day}</Button> */}
            <hr />

        </>
    )
}

export default DailyPlan;
