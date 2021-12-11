import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlan } from '../actions/planActions';

// imported library components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Moment from 'react-moment';

// icons
import { MdDeleteForever, MdLocalPrintshop } from 'react-icons/md'


function ViewPlans() {
    const dispatch = useDispatch();
    const savedPlans = useSelector(state => state.planCRD.fullPlans);

    console.log(savedPlans);

    const handleDelete = (id) => {
        // https://react-bootstrap.github.io/components/modal/ for later refining of delete functionality with modals
        dispatch(deletePlan(id));

        alert("Say goodbye to your plan!");
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-10 m-5">
                    <h3>Your Saved Plans</h3>
                    <br />
                    
                    <div className="row d-flex justify-content-center">
                        {savedPlans.map(planObj => {
                            return (
                                <Card key={planObj.id} className="mb-3 pb-3 pb-md-0" style={{maxWidth: "800px"}}>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-10 d-flex align-items-center">
                                            <p className="mt-3 ms-3 me-3">
                                                {planObj.data.gradeLevel} {planObj.data.subject[0]} weekly plan for week of&nbsp;<Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment>
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

                    
                    

                    {/* <ul>
                        {savedPlans.map(planObj => {
                            return (
                                <li key={planObj.id} className="mb-3">
                                    
                                    {planObj.data.gradeLevel} {planObj.data.subject[0]} weekly plan for week of&nbsp; 
                                    <Moment format="MM/DD/YYYY">
                                        {planObj.data.weekOf} 
                                    </Moment>
                                    &nbsp;
                                    <Button className="btn btn-primary">View details <MdLocalPrintshop /></Button>
                                    &nbsp;
                                    <Button className="btn btn-warning">Add to print list <MdLocalPrintshop /></Button>
                                    &nbsp;
                                    <Button className="btn btn-danger" onClick={() => handleDelete(planObj.id)}>Delete <MdDeleteForever/></Button>
                                    &nbsp;
                                </li>
                            )
                        })}
                    </ul> */}
                </div>
            </div>

            
        </div>
    )
}

export default ViewPlans;
