/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../actions/planActions';

// local components
import PlanCard from './PlanCard';
import PrintSidePlanel from './PrintSidePlanel';

// imported library components
import Form from 'react-bootstrap/Form';


function ViewPlans() {
    const dispatch = useDispatch();
    const savedPlans = useSelector(state => state.planCRD.fullPlans);

    // local state variables
    const [searchDate, setSearchDate] = useState("");
    const [searchedPlans, setsearchedPlans] = useState([]);

    useEffect(() => {
        let searchArray = savedPlans.filter(plan => {
            return plan.data.weekOf === searchDate
        })

        setsearchedPlans(searchArray)

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
                    <div className="row">

                        {/* main content */}
                        <div className="col-8">
                            <h3>Search Plans By Week</h3>
                            <Form className="mb-5">
                                <Form.Group>
                                    <Form.Label>Select starting date for the week you would like to search for</Form.Label>
                                    <Form.Control value={searchDate} type="date" onChange={(e) => setSearchDate(e.target.value)}></Form.Control>
                                </Form.Group>
                            </Form>

                            {searchDate && 
                                <div className="mb-5">
                                    <h3>Plans Matching Your Search</h3>
                                    <br />
                                    
                                    <div className="row d-flex justify-content-center">
                                        {searchedPlans.map(planObj => {
                                            
                                            return (
                                                <PlanCard key={planObj.id} planObj={planObj} handleDelete={handleDelete}/>
                                            )
                                        })}
                                    </div>
                                </div>
                            }

                            {/* List of all saved plans... maybe limit the length of these to 10-15... */}
                            <h3>Your Most Recently Saved Plans</h3>
                            <br />
                            
                            <div className="row d-flex justify-content-center">
                                {savedPlans.map(planObj => {
                                    
                                    return (
                                        <PlanCard key={planObj.id} planObj={planObj} handleDelete={handleDelete}/>
                                    )
                                })}
                            </div>
                        </div>

                        {/* side panel */}
                        <div className="col-4">
                            <PrintSidePlanel />
                        </div>
                    </div>

                    
                </div>
            </div>

            
        </div>
    )
}

export default ViewPlans;
