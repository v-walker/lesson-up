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
import { CgPlayListRemove } from 'react-icons/cg';
import { RiLayout5Line } from 'react-icons/ri'

function PrintSidePlanel() {
    const dispatch = useDispatch();
    
    const printList = useSelector(state => state.planCRD.printList);
    printList.sort(sortByTime);
    
    return (
        <div className="ms-2 ms-lg-5 mb-5 side-panel ps-md-3">
            <h3>Print List</h3>

            <ul className="mt-5 mb-5">
                {printList.map(planObj => {
                    return (
                        <li key={planObj.id}> <CgPlayListRemove style={{color: "#D95D30", fontSize: "1.5em"}} onClick={() => dispatch(removeFromPrintList(planObj.id))} /> {tConvert (planObj.data.time)} {planObj.data.gradeLevel} {planObj.data.subject[0]} plan for week of&nbsp;<Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment></li>
                    )
                })}
            </ul>

            {printList.length > 0
            ? <div className="text-end">
                    <Button className="btn btn-warning"><Link to="/print_plans">View Print Layout<br /><span><RiLayout5Line/></span></Link></Button>
                </div>
            : <div className="intro">
                Hmmm... there's nothing here yet! Search for your content area plans and select the ones you want to print. Once you add them, you'll see them here and a link to the print view.
            </div>
            }
            

        </div>
    )
}

export default PrintSidePlanel;
