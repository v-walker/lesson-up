import React from 'react';

import Moment from 'react-moment';

// Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

function PlanCard({planObj, handleDelete}) {
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
}

export default PlanCard
