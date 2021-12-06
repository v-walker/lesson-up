import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStandardsForSubject } from '../actions/standardsActions';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreatePlan() {
    const [gradeLevel, setGradeLevel] = useState("");
    const [subject, setSubject] = useState("");
    const [subjID, setSubjID] = useState("");
    const [standards, setStandards] = useState([]);
    const [currentSelectedStandard, setCurrentSelectedStandard] = useState("")
    const dispatch = useDispatch();
    const georgiaData = useSelector(state => state.standardsCRD.standardSets)
    let contentAreas = georgiaData.filter(standardSetObj => {
        return standardSetObj.title === gradeLevel
    });

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleSubjectSelection = async (e) => {
        let id = e.target.children[e.target.selectedIndex].id;
        // console.log(e);
        
        setSubject(e.target.value);
        setSubjID(id);
 
        // getStandardsForSubject(subjID);

        let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/standard_sets/${id}/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)
        
        console.log(responseData.data.data.standards);
        setStandards(responseData.data.data.standards);
    }

    const handleStandardSelection = () => {
        
    }

    console.log(gradeLevel);

    console.log(contentAreas);
    console.log(subject);
    console.log("subID", subjID);
    console.log("standards", standards);
    
    
    return (
        <>
            <Form>
                <Form.Label onSubmit={handleSubmit}>Select Grade Level</Form.Label>
                <Form.Select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
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
                    <Form.Select value={subject} onChange={(e) => handleSubjectSelection(e)}>
                        {contentAreas.map(contentObj => {
                            return <option key={contentObj.id} id={contentObj.id}>{contentObj.subject}</option>
                        })}
                    </Form.Select>

                    <Form.Label>Select Standard(s) {subject && <span>for {subject}</span>}</Form.Label>
                    <Form.Select value={currentSelectedStandard} onChange={(e) => handleStandardSelection(e)}>
                            
                        
                    </Form.Select>
                </>
            }
            
            {/* <Button type="submit">Submit</Button> */}
            </Form>

        </>
    )
}

export default CreatePlan;
