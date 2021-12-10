import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import { deletePlan } from '../actions/planActions';

// icons
import { MdDeleteForever } from 'react-icons/md'


function ViewPlans() {
    const dispatch = useDispatch();
    const savedPlans = useSelector(state => state.planCRD.fullPlans);

    console.log(savedPlans);

    const handleDelete = (id) => {
        // https://react-bootstrap.github.io/components/modal/ for later refining of delete functionality
        dispatch(deletePlan(id));

        alert("Say goodbye to your plans!");
    }

    return (
        <div>
            View Plans


            <h3>Your Saved Plans</h3>
            <br />
            <ul>
                {savedPlans.map(planObj => {
                    return (
                        <li key={planObj.id}>{planObj.data.gradeLevel} {planObj.data.subject[0]} weekly plan for week of&nbsp; 
                            <Moment format="MM/DD/YYYY">
                            {planObj.data.weekOf} 
                            </Moment>&nbsp;
                            <Button className="btn btn-danger" onClick={() => handleDelete(planObj.id)}><MdDeleteForever/></Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ViewPlans;
