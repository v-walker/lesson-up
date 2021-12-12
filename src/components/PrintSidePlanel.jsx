import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// local components
import { tConvert, sortByTime } from '../utils';
import { removeFromPrintList } from '../actions/planActions';

// library components
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';

// icons
import { CgPlayListRemove } from 'react-icons/cg'

function PrintSidePlanel() {
    const dispatch = useDispatch();
    
    const printList = useSelector(state => state.planCRD.printList);
    printList.sort(sortByTime);
    
    return (
        <div className="ms-2 ms-lg-5 mb-5">
            <h4>Print List</h4>

            <ul className="mt-5 mb-5">
                {printList.map(planObj => {
                    return (
                        <li key={planObj.id}> <CgPlayListRemove style={{color: "red"}} onClick={() => dispatch(removeFromPrintList(planObj.id))} /> {tConvert (planObj.data.time)} {planObj.data.gradeLevel} {planObj.data.subject[0]} plan for week of&nbsp;<Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment></li>
                    )
                })}
            </ul>

            <div className="text-end">
                <Button className="btn btn-warning"><Link to="/print_plans">Go to Print View</Link></Button>
            </div>

        </div>
    )
}

export default PrintSidePlanel;
