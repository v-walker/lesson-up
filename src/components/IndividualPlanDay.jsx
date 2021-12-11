import React from 'react';

function IndividualPlanDay() {
    return (
        <div className="m-0 p-0" style={{width: "20%", borderRight: "0.5px solid black"}}>
            <div className="row">
                <div className="col-12">
                    <div className="text-center" style={{backgroundColor: "yellow"}}>
                        <b>Day</b>
                        <hr className="m-0" />
                    </div>
                    <div className="ms-2">
                        <b>Learning Target:</b> 
                    </div>
                    <hr />

                    <div className="ms-2">
                        <p>
                            <b>Hook: </b>
                            <br />
                        </p>
                        <p>
                            <b>Lesson:</b>
                            <br />
                        </p>
                        <p>
                            <b>Closing:</b>
                            <br />
                        </p>   
                    </div>  
                    <hr />                  
                    <div className="ms-2">
                        <b>Assessment Method(s)/Graded Assignment(s):</b> 
                    </div>
                    <hr />
                    <div className="ms-2">
                        <b>Accommodations:</b> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualPlanDay;
