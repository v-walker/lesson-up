import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Moment from 'react-moment';

// local components
import { tConvert } from '../utils';
import { addToPrintList, removeFromPrintList } from '../actions/planActions';

// Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// icons
import { MdDeleteForever, MdLocalPrintshop } from 'react-icons/md'
import { CgPlayListRemove } from 'react-icons/cg'

function PlanCard({planObj, handleDelete}) {
    const dispatch = useDispatch();

    // data from Redux
    const printList = useSelector(state => state.planCRD.printList)
    console.log(printList);

    return (
        <Card key={planObj.id} className="mb-3 pb-3 pb-md-0" style={{maxWidth: "800px"}}>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                    <p className="mt-3 ms-3 me-3">
                        
                        {tConvert (planObj.data.time)} {planObj.data.gradeLevel} {planObj.data.subject[0]} plan for week of&nbsp;<Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment>
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="row d-flex align-items-center justify-content-center justify-content-md-end">
                        <Button className="btn btn-primary w-75">View details <br /> <MdLocalPrintshop /></Button>
                        {!printList.includes(planObj)
                        ? <Button className="btn btn-warning w-75" onClick={() => dispatch(addToPrintList(planObj.id))}>Add to print list<br /> <MdLocalPrintshop /></Button>
                        : <Button className="btn btn-warning w-75" onClick={() => dispatch(removeFromPrintList(planObj.id))}>Remove from print list<br /> <CgPlayListRemove /></Button>
                        }
                        
                        <Button className="btn btn-danger w-75" onClick={() => handleDelete(planObj.id)}>Delete forever <br /><MdDeleteForever/></Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PlanCard
