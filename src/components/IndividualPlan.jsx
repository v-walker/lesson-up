import React from 'react';
import IndividualPlanDay from './IndividualPlanDay';
import { daysArray, tConvert } from '../utils';

import Moment from 'react-moment';

function IndividualPlan({planObj}) {
    // console.log(planObj);
    const dailyPlans = planObj.data.dailyPlans

    // console.log(dailyPlans);
    // console.log(dailyPlans.Monday);
    
    return (
        <div>
            
            <div className="toPrint" style={{display: "flex", justifyContent: "center", fontSize: "0.8rem"}}>
            <div className="container m-5 detailed-plan-card">
                <div className="row">
                    <div className="text-center pt-2 pb-2 z-1" width="100%" style={{backgroundColor: "#F2AA52"}}>
                        <b>{tConvert(planObj.data.time)} {planObj.data.gradeLevel} {planObj.data.subject[0]}</b>
                    </div>
                    <hr className="m-0" />
                </div>
                
                
                <div className="row" style={{backgroundColor: "white"}}>
                    <div className="col-12">
                        <b>Week of:</b> <Moment format="MM/DD/YYYY">{planObj.data.weekOf}</Moment>
                    </div>
                    <hr className="m-0"/>
                    <div className="col-12">
                        <b>Standard(s):</b>
                        <br />
                        {/* standards here */}
                        <ul>
                            <li key={1}>{planObj.data.selectedStandard1}</li>
                            {planObj.data.selectedStandard2 && <li key={2}>{planObj.data.selectedStandard2}</li>}
                            {planObj.data.selectedStandard3 && <li key={3}>{planObj.data.selectedStandard3}</li>}
                        </ul>
                    </div>
                    {planObj.data.contentVocab && 
                    <>
                        <hr className="m-0"/>
                        <div className="col-12">
                            <b>Content Vocabulary:</b> &nbsp; {planObj.data.contentVocab}
                        </div>
                    </>}
                    
                    <hr className="m-0" />
                </div>

                <div className="row">
                    <div className="col-12 m-0 p-0 row">
                        <div className="row w-100 plan-holder gx-0">
                            
                            {daysArray.map(day => {
                                return <IndividualPlanDay key={day} day={day} data={dailyPlans[day]} />
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
    )
}

export default IndividualPlan;
