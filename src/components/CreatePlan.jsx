/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Moment from 'react-moment';

// bootstrap library components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DailyPlan from './DailyPlan';
import { sortStandardsInOrder } from '../utils';

import { saveContentAreaData, clearContentAreaData, saveDailyPlans, clearDailyPlans, saveWeeklyPlans } from '../actions/planActions';

function CreatePlan() {
    const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // saved data from Redux
    const savedWeekOf = useSelector(state => state.planCRD.contentAreaData.weekOf);
    const savedGradeLevel = useSelector(state => state.planCRD.contentAreaData.gradeLevel);
    const savedSubject = useSelector(state => state.planCRD.contentAreaData.subject);
    const savedSelectedStandard1 = useSelector(state => state.planCRD.contentAreaData.selectedStandard1);
    const savedSelectedStandard2 = useSelector(state => state.planCRD.contentAreaData.selectedStandard2);
    const savedSelectedStandard3 = useSelector(state => state.planCRD.contentAreaData.selectedStandard3);
    const savedContentVocab = useSelector(state => state.planCRD.contentAreaData.contentVocab);
    const savedTime = useSelector(state => state.planCRD.contentAreaData.time);

    // initial local state variables and setters
    const [weekOf, setWeekOf] = useState(savedWeekOf || "")
    const [gradeLevel, setGradeLevel] = useState(savedGradeLevel || "");
    const [subject, setSubject] = useState(savedSubject || []);
    const [standards, setStandards] = useState({});
    const [arrayOfStandards, setArrayOfStandards] = useState([]);
    const [selectedStandard1, setSelectedStandard1] = useState(savedSelectedStandard1 || "");
    const [selectedStandard2, setSelectedStandard2] = useState(savedSelectedStandard2 || "");
    const [selectedStandard3, setSelectedStandard3] = useState(savedSelectedStandard3 || "");
    const [contentVocab, setContentVocab] = useState(savedContentVocab || "")
    const [time, setTime] = useState(savedTime || "");
    const [dailyPlans, setDailyPlans] = useState({})
    const dispatch = useDispatch();
    
    const stateData = useSelector(state => state.standardsCRD.standardSets);
    let contentAreas = stateData.filter(standardSetObj => {
        return standardSetObj.title === gradeLevel
    });


    useEffect( () => {
        
        const getStandardsData = async (id) => {
            let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/standard_sets/${id}/?api-key=${process.env.REACT_APP_CSP_API_KEY}`);
            setStandards(responseData.data.data.standards);
            }
        
        if (savedSubject) {
            getStandardsData(savedSubject[1])
        }
    }, [])

    useEffect(() => {
        // console.log(standards);
        let tempArray = [];
        for (let standardKey in standards) {
            tempArray.push(standards[standardKey])
        };

        tempArray.sort(sortStandardsInOrder);
        // console.log(tempArray);

        setArrayOfStandards(tempArray);
    }, [standards])

    useEffect(() => {
        // console.log(arrayOfStandards);
    }, [arrayOfStandards])

    const handleSubjectSelection = async (e) => {
        let id = e.target.children[e.target.selectedIndex].id;
        
        setSubject([e.target.value, id]);

        let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/standard_sets/${id}/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)
        
        // console.log(responseData.data.data.standards);
        setStandards(responseData.data.data.standards);
    }

    const handleSaveContentAreaData = () => {
        dispatch(saveContentAreaData({weekOf, gradeLevel, subject, selectedStandard1, selectedStandard2, selectedStandard3, contentVocab, time}));

        alert("Content area data saved!")
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
        let weekOfFormatted = <Moment format="MM/DD/YYYY">{weekOf}</Moment>

        // add all of the week's daily plans to global state (set up action and case in reducer for this)
        dispatch(saveWeeklyPlans(weekOf, gradeLevel, subject, selectedStandard1, selectedStandard2, selectedStandard3, contentVocab, time, dailyPlans));
        
        alert(`Weekly plan ${weekOfFormatted} for ${gradeLevel} ${subject[0]} successfully saved!`);

        // clear daily Plans array
        setDailyPlans({});
        dispatch(clearContentAreaData());

        // clear out form variables
        setWeekOf("");
        setGradeLevel("");
        setSubject([]);
        setStandards({});
        setArrayOfStandards([]);
        setSelectedStandard1("");
        setSelectedStandard2("");
        setSelectedStandard3("");
        setContentVocab("");
        setTime("");

        dispatch(clearDailyPlans());
        
    }
    
    return (
        <>
            <h2 className="text-center mt-5">Let's Make a Plan!</h2>
            <div className="row d-flex justify-content-center m-0">
                <div className="col-12 col-md-10 col-xl-8">
                    <Form className="p-5 p-md-0 mt-0 mb-0 mt-md-5 mb-md-5" onSubmit={handleSaveWeeklyPlan}>
                    <Form.Group>
                    
                        
                        {savedWeekOf && 
                        <> Let's pick up where you left off. If you need to change any values, remember to save your changes!
                        <br /><br />
                        </>
                        }
                        <Form.Label>Week of</Form.Label> &nbsp;
                        <Form.Control type="date" value={weekOf} onChange={(e) => setWeekOf(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <br />
                    <Form.Group>
                        <Form.Label>Select Grade Level</Form.Label>
                        <Form.Select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
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
                    </Form.Group>
                {gradeLevel &&
                    <>
                        <br />
                        <Form.Group>
                            <Form.Label>Select Content Area</Form.Label>
                            <Form.Select value={subject[0]} onChange={(e) => handleSubjectSelection(e)}>
                                <option hidden>Select a content area</option>
                                {contentAreas.map(contentObj => {
                                    return <option key={contentObj.id} id={contentObj.id}>{contentObj.subject}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </>
                } {/* end of grade level and standards section */}

                {subject &&
                    <>
                        <br />
                        <Form.Group className="g-0">
                            <Form.Label>Select Standard(s) {subject && <span>for {gradeLevel} {subject[0]}</span>}</Form.Label>
                            
                            <Form.Select className="" value={selectedStandard1} onChange={(e) => setSelectedStandard1(e.target.value)}>
                                <option hidden>Standard Selection 1</option>
                                {arrayOfStandards.map((standardObj, index) => {
                                        let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')
                                        // let optionValue = standardObj.statementNotation + " " + description;

                                        return <option key={index}>{standardObj.statementNotation} {description}</option>
                                    })}
                            </Form.Select>
                            <br />
                            <Form.Select className="" value={selectedStandard2} onChange={(e) => setSelectedStandard2(e.target.value)}>
                                <option hidden>Standard Selection 2 (optional)</option>
                                {arrayOfStandards.map((standardObj, index) => {
                                        let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')

                                        return <option key={index}>{standardObj.statementNotation}: {description}</option>
                                    })}
                            </Form.Select>
                            <br />
                            <Form.Select className="" value={selectedStandard3} onChange={(e) => setSelectedStandard3(e.target.value)}>
                                <option hidden>Standard Selection 3 (optional)</option>
                                {arrayOfStandards.map((standardObj, index) => {
                                        let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')

                                        return <option key={index}>{standardObj.statementNotation}: {description}</option>
                                    })}
                            </Form.Select>
                            <br />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Content Vocabulary</Form.Label>
                            <Form.Control type="text" value={contentVocab} placeholder="Input content vocabulary list here" onChange={(e) => setContentVocab(e.target.value)}></Form.Control>
                            <br />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Time</Form.Label> &nbsp;
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                        </Form.Group>
                        <br />
                        
                        {selectedStandard1 && <Button onClick={() => handleSaveContentAreaData()}>Save Content Area</Button>}
                        <br /><br />
                    </>
                }

                
                {selectedStandard1 &&
                    <>  
                        <Tabs defaultActiveKey="Monday" id="day-tabs" className="mb-3">
                            {daysArray.map((day, index) => {
                                return (
                                    <Tab key={index} eventKey={day} title={day}>
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
