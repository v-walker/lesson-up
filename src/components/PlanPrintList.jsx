import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import IndividualPlan from './IndividualPlan';

// utils
import { sortByTime } from '../utils'

function PlanPrintList() {
    const printList = useSelector(state => state.planCRD.printList);
    printList.sort(sortByTime);
    
    return (
        <div>

            {printList.length > 0
            ?
            <>
                {printList.map(planObj => {
                return <IndividualPlan key={planObj.id} planObj={planObj} />
            })}
            </>
            :
            <>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
                            <div>
                            <h3>Oops!</h3>
                            <div className="mt-5 oops">
                                <div className="intro">
                                    <p className="">
                                        You don't have any plans here yet.
                                    </p> 
                                    <p>
                                        If you are new here, navigate back to the <Link to="/">Home</Link> page to select your state. 
                                    </p>
                                    <p>
                                        If you are returning and would like to make some plans to print later, click <Link to="/create">Create Plan</Link>.
                                    </p>
                                    <p>
                                        If you have already made plans you would like to print, go to <Link to="/view_plans">View Plans</Link>.
                                    </p>
                                </div>
                                
                                <br />
                                <Link to="/">Home</Link>&nbsp;&nbsp;
                                <Link to="/create">Create Plan</Link>&nbsp;&nbsp;
                                <Link to="/view_plans">View Plans</Link>&nbsp;&nbsp;
                            </div>
                            
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </>
            }
            
        </div>
    )
}

export default PlanPrintList;
