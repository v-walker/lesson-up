import React from 'react';
import IndividualPlanDay from './IndividualPlanDay';

function IndividualPlan() {
    return (
        <>
            <div className="container m-5" style={{border: "0.5px solid black"}}>
                <div className="row d-flex justify-content-center" style={{backgroundColor: "yellow", border: "1px solid black"}}>
                    Time, Grade and Subject Area (darker background color)
                </div>

                <div className="row" style={{backgroundColor: "white", border: "0.5px solid black"}}>
                    <div className="col-12">
                        Standards:
                    </div>
                    <hr />
                    <div>
                        Content Vocabulary:
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div style={{display: "flex", width: "100%"}}>
                            <IndividualPlanDay />
                            <IndividualPlanDay />
                            <IndividualPlanDay />
                            <IndividualPlanDay />
                            <IndividualPlanDay />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default IndividualPlan;
