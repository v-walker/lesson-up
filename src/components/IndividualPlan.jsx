import React from 'react';
import IndividualPlanDay from './IndividualPlanDay';

function IndividualPlan() {
    return (
        <div>
            
            <div style={{display: "flex", justifyContent: "center", fontSize: "0.8rem"}}>
            <div className="container m-5" style={{border: "0.5px solid black"}}>
                <div className="row">
                    <div className="text-center pt-2 pb-2" width="100%" style={{backgroundColor: "yellow"}}>
                        <b>Time, Grade and Subject Area</b>
                    </div>
                    <hr className="m-0" />
                </div>
                
                
                <div className="row" style={{backgroundColor: "white"}}>
                    <div className="col-12">
                        <b>Week of:</b>
                    </div>
                    <hr className="m-0"/>
                    <div className="col-12">
                        <b>Standard(s):</b>
                        <br />
                        {/* standards here */}
                    </div>
                    <hr className="m-0"/>
                    <div className="col-12">
                        <b>Content Vocabulary:</b> &nbsp; {/* content vocab here */}
                    </div>
                    <hr className="m-0" />
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
            
        </div>
        </div>
        
    )
}

export default IndividualPlan;