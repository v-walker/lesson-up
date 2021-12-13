import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Moment from 'react-moment';

// local components
import { tConvert } from '../utils';
import { addToPrintList, removeFromPrintList } from '../actions/planActions';

// Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

// icons
import { MdDeleteForever, MdLocalPrintshop, MdExpandMore, MdExpandLess } from 'react-icons/md'
import { CgPlayListRemove } from 'react-icons/cg'

function PlanCard({planObj, handleDelete}) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    // data from Redux
    const printList = useSelector(state => state.planCRD.printList)

    return (
        <Card key={planObj.id} className="mb-3 pb-3 pb-md-0" style={{maxWidth: "800px"}}>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                    <div className="mt-3 ms-3 me-3 custom-collapse">
                        
                        {tConvert (planObj.data.time)} {planObj.data.gradeLevel} {planObj.data.subject[0]} plan for week of&nbsp;<Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment>
                        <br />
                        <Button
                            variant="link"
                            onClick={() => setOpen(!open)}
                            aria-controls="collapse-text"
                            aria-expanded={open}
                        >
                            {!open? <>View standard(s) <MdExpandMore /></>:<>Collapse standards <MdExpandLess /></>}
                        </Button>
                        <Collapse in={open}>
                            <div id="collapse-text">
                                <ul>
                                    <li key={1}>{planObj.data.selectedStandard1}</li>
                                    {planObj.data.selectedStandard2 && <li key={2}>{planObj.data.selectedStandard2}</li>}
                                    {planObj.data.selectedStandard3 && <li key={3}>{planObj.data.selectedStandard3}</li>}
                                </ul>
                                
                            </div>
                        </Collapse>
                    </div>

                    
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="row d-flex align-items-center justify-content-center justify-content-md-end">
                        {!printList.find(obj => obj.id === planObj.id)
                        ? <Button className="btn btn-warning w-75" onClick={() => dispatch(addToPrintList(planObj.id))}>Add to print list<br /> <span><MdLocalPrintshop /></span></Button>
                        : <Button className="btn btn-warning w-75" onClick={() => dispatch(removeFromPrintList(planObj.id))}>Remove from print list<br /> <span><CgPlayListRemove /></span></Button>
                        }
                        
                        <Button className="btn btn-danger w-75" onClick={() => handleDelete(planObj.id)}>Delete forever <br /> <span><MdDeleteForever/></span></Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PlanCard
