import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DailyPlan from './DailyPlan';

import { saveDailyPlans, clearDailyPlans, saveWeeklyPlans } from '../actions/planActions';

function CreatePlan() {
    const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];



    const [weekOf, setWeekOf] = useState("")
    const [gradeLevel, setGradeLevel] = useState("");
    const [subject, setSubject] = useState("");
    const [standards, setStandards] = useState({});
    const [arrayOfStandards, setArrayOfStandards] = useState([]);
    const [selectedStandard1, setSelectedStandard1] = useState("");
    const [selectedStandard2, setSelectedStandard2] = useState("");
    const [selectedStandard3, setSelectedStandard3] = useState("");
    const [dailyPlans, setDailyPlans] = useState({})
    const dispatch = useDispatch();
    
    const stateData = useSelector(state => state.standardsCRD.standardSets);
    let contentAreas = stateData.filter(standardSetObj => {
        return standardSetObj.title === gradeLevel
    });

    useEffect(() => {
        // console.log(standards);
        let tempArray = [];
        for (let standard in standards) {
            tempArray.push(standards[standard])
        };
        
        // manipulate temp array so that items are in order by "statementNotation"

        setArrayOfStandards(tempArray);
    }, [standards])


    useEffect(() => {
        console.log("plans", dailyPlans);
    }, [dailyPlans])
    
    // console.log("standards", arrayOfStandards);

    const handleSubmit = (e) => {
        // handles submission of completed form
        e.preventDefault();

    }

    const handleSubjectSelection = async (e) => {
        let id = e.target.children[e.target.selectedIndex].id;
        
        setSubject(e.target.value);

        let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/standard_sets/${id}/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)
        
        // console.log(responseData.data.data.standards);
        setStandards(responseData.data.data.standards);
    }

    const checkDaysinPlanArray = (array) => {
        let checkMonday = "Monday" in array;
        let checkTuesday = "Tuesday" in array;
        let checkWednesday = "Wednesday" in array;
        let checkThursday = "Thursday" in array;
        let checkFriday = "Friday" in array;

        return checkMonday && checkTuesday && checkWednesday && checkThursday && checkFriday
    }

    const handleSaveDailyPlan = (dailyPlanData, day) => {
        dispatch(saveDailyPlans(day, dailyPlanData));

        setDailyPlans({
            ...dailyPlans,
            [day]: dailyPlanData
        })

        alert(`Daily plan for ${day} saved!`)
    }

    const handleSaveWeeklyPlan = (e) => {
        e.preventDefault();
        // add all of the week's daily plans to global state (set up action and case in reducer for this)
        dispatch(saveWeeklyPlans(weekOf, gradeLevel, subject, selectedStandard1, selectedStandard2, selectedStandard3, dailyPlans))

        // clear daily Plans array
        setDailyPlans({});
        dispatch(clearDailyPlans());
    }

    // console.log(gradeLevel);
    // console.log(contentAreas);
    // console.log(subject);
    // console.log("standards", standards);
    
    return (
        <>
            <h2 className="text-center">Let's Make a Plan!</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-10 col-xl-8">
                    <Form className="p-5 p-md-0 mt-0 mb-0 mt-md-5 mb-md-5" onSubmit={handleSaveWeeklyPlan}>
                    <Form.Group>
                        <Form.Label>Week of </Form.Label>
                        <Form.Control type="date" onChange={(e) => setWeekOf(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Label onSubmit={handleSubmit}>Select Grade Level</Form.Label>
                    <Form.Select value={gradeLevel} defaultValue="Select a grade level" onChange={(e) => setGradeLevel(e.target.value)}>
                        <option hidden>Select a grade level</option>
                        <option>Grade K</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                        <option>Grade 12</option>
                    </Form.Select>
                
                {gradeLevel &&
                    <>
                        <Form.Label>Select Content Area</Form.Label>
                        <Form.Select value={subject} defaultValue="Select a content area" onChange={(e) => handleSubjectSelection(e)}>
                            <option hidden>Select a content area</option>
                            {contentAreas.map(contentObj => {
                                return <option key={contentObj.id} id={contentObj.id}>{contentObj.subject}</option>
                            })}
                        </Form.Select>
                    </>
                } {/* end of grade level and standards section */}

                {subject &&
                    <>
                        <Form.Label>Select Standard(s) {subject && <span>for {subject}</span>}</Form.Label>
                        
                        <Form.Select value={selectedStandard1} defaultValue="" onChange={(e) => setSelectedStandard1(e.target.value)}>
                            <option hidden>Standard Selection 1</option>
                            {arrayOfStandards.map(standardObj => {
                                    let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')

                                    return <option>{standardObj.statementNotation} {description}</option>
                                })}
                        </Form.Select>
                        <br />
                        <Form.Select value={selectedStandard2} defaultValue="" onChange={(e) => setSelectedStandard2(e.target.value)}>
                            <option hidden>Standard Selection 2 (optional)</option>
                            {arrayOfStandards.map(standardObj => {
                                    let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')

                                    return <option>{standardObj.statementNotation}: {description}</option>
                                })}
                        </Form.Select>
                        <br />
                        <Form.Select value={selectedStandard3} defaultValue="Standard Selection 3" onChange={(e) => setSelectedStandard3(e.target.value)}>
                            <option hidden>Standard Selection 3 (optional)</option>
                            {arrayOfStandards.map(standardObj => {
                                    let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')

                                    return <option>{standardObj.statementNotation}: {description}</option>
                                })}
                        </Form.Select>
                        <br />
                    </>
                }

                
                {selectedStandard1 &&
                    <>  
                        <Tabs defaultActiveKey="Monday" id="day-tabs" className="mb-3">
                            {daysArray.map(day => {
                                return (
                                    <Tab eventKey={day} title={day}>
                                        <DailyPlan day={day} handleSaveDailyPlan={(dailyPlanData) => handleSaveDailyPlan(dailyPlanData, day)} />
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </>
                }

                {checkDaysinPlanArray(dailyPlans) && 
                    <div className="d-flex justify-content-center">
                    <Button type="submit" className="btn-success">Submit Full Weekly Plan</Button>
                    </div>
                }
                
                </Form>
                </div>
            </div>
            
        </>
    )
}

export default CreatePlan;
