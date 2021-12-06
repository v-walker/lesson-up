import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import DailyPlan from './DailyPlan';

function CreatePlan() {
    const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [gradeLevel, setGradeLevel] = useState("");
    const [subject, setSubject] = useState("");
    const [standards, setStandards] = useState({});
    const [arrayOfStandards, setArrayOfStandards] = useState([]);
    const [selectedStandards, setSelectedStandards] = useState([]);
    const dispatch = useDispatch();
    
    const georgiaData = useSelector(state => state.standardsCRD.standardSets);
    let contentAreas = georgiaData.filter(standardSetObj => {
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

    const handleStandardSelection = () => {
        
    }

    // console.log(gradeLevel);

    // console.log(contentAreas);
    // console.log(subject);
    // console.log("standards", standards);
    
    
    return (
        <>
            <Form>
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
            {/* </Form> */}

            
            {gradeLevel &&
                <>
                    <Form.Label>Select Content Area</Form.Label>
                    <Form.Select value={subject} defaultValue="Select a content area" onChange={(e) => handleSubjectSelection(e)}>
                        <option hidden>Select a content area</option>
                        {contentAreas.map(contentObj => {
                            return <option key={contentObj.id} id={contentObj.id}>{contentObj.subject}</option>
                        })}
                    </Form.Select>

                    <Form.Label>Select Standard(s) {subject && <span>for {subject}</span>}</Form.Label>
                    {/* save this data in local state somehow... */}
                    <div className="standardsCheckboxes">
                    {arrayOfStandards.map(standardObj => {
                            let description = standardObj.description.replace(/<\/?[^>]+>/gi, '')

                            return <div>
                                    <input type="checkbox" id={standardObj.id} value={standardObj.id} />
                                    <label for={standardObj.id}><b>{standardObj.statementNotation}:</b> {description}</label>
                                </div>
                        })}
                    </div>
                </>
            } {/* end of grade level and standards section */}

            {daysArray.map(day => {
               return (
                   <>
                    <DailyPlan day={day} />
                    <br></br>
                    </>
               )
            })}
            
            <div className="text-center">
                <Button type="submit">Submit</Button>
            </div>
            
            </Form>

        </>
    )
}

export default CreatePlan;
