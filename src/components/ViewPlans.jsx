import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../actions/planActions';

// imported library components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Moment from 'react-moment';

// icons
import { MdDeleteForever, MdLocalPrintshop } from 'react-icons/md'


function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
    }



function ViewPlans() {
    const dispatch = useDispatch();
    const savedPlans = useSelector(state => state.planCRD.fullPlans);

    // local state variables
    const [searchDate, setSearchDate] = useState("")

    console.log(savedPlans);

    useEffect(() => {
        

    }, [searchDate])

    const handleDelete = (id) => {
        // https://react-bootstrap.github.io/components/modal/ for later refining of delete functionality with modals
        dispatch(deletePlan(id));

        alert("Say goodbye to your plan!");
    }

    

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-10 m-5">
                    <h3>Search Plans By Week</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label>Select starting date for the week you would like to search for</Form.Label>
                                <Form.Control value={searchDate} type="date" onChange={(e) => setSearchDate(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Form>

                        {searchDate && 
                            <>
                                <h3>Plans Matching Your Search</h3>
                            </>
                        }

                    {/* List of all saved plans... maybe limit the length of these to 10-15... */}
                    <h3>Your Saved Plans</h3>
                    <br />
                    
                    <div className="row d-flex justify-content-center">
                        {savedPlans.map(planObj => {
                            
                            return (
                                <Card key={planObj.id} className="mb-3 pb-3 pb-md-0" style={{maxWidth: "800px"}}>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-10 d-flex align-items-center">
                                            <p className="mt-3 ms-3 me-3">
                                                
                                                {tConvert (planObj.data.time)} {planObj.data.gradeLevel} {planObj.data.subject[0]} plan for week of&nbsp;<Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment>
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-2">
                                            <div className="row d-flex align-items-center justify-content-center justify-content-md-end">
                                                <Button className="btn btn-primary w-75">View details <br /> <MdLocalPrintshop /></Button>
                                                <Button className="btn btn-warning w-75">Add to print list<br /> <MdLocalPrintshop /></Button>
                                                <Button className="btn btn-danger w-75" onClick={() => handleDelete(planObj.id)}>Delete forever <br /><MdDeleteForever/></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default ViewPlans;
