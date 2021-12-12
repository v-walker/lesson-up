import React from 'react';

function IndividualPlanDay({day, data}) {
    console.log(data);

    
    
    return (

        <div className="m-0 p-0" style={{width: "20%", borderRight: "0.5px solid black"}}>
            <div className="row">
                <div className="col-12">
                    <div className="text-center" style={{backgroundColor: "yellow"}}>
                        <b>{day}</b>
                        <hr className="m-0" />
                    </div>

                    {data.activities && 
                        <>
                        
                        </>}

                    {data.noSchool === true
                    ? <>
                        <div className="ms-2">
                            <b>No School</b>
                        </div>
                    </>
                    : <>
                        {data.learningTarget && 
                        <>
                            <div className="ms-2">
                                <b>Learning Target:</b> {data.learningTarget}
                            </div>
                            <hr />
                        </>}
                        
                        {data.activities.length !== 0 && 
                        <>
                            <div className="ms-2">
                            <b>Activities:</b>
                            <ul>
                                {data.activities.map((activity, index) => {
                                    return <li key={index}>{activity}</li>
                                })}
                            </ul>
                            {data.activityDescrip && 
                            <>
                                {data.activityDescrip}
                            </>}
                            </div>
                            <hr />
                        </>}
                        
                        
                        {(data.hook || data.lesson || data.closing) &&
                        <>
                            <div className="ms-2">
                            {data.hook && 
                            <>
                                <p>
                                    <b>Hook: </b> {data.hook}
                                    <br />
                                </p>
                            </>}

                            {data.lesson && 
                            <>
                                <p>
                                    <b>Lesson:</b> {data.lesson}
                                    <br />
                                </p>
                            </>}
                            
                            {data.closing && 
                            <>
                                <p>
                                    <b>Closing:</b> {data.closing}
                                    <br />
                                </p>  
                            </>}

                            </div>  
                            <hr />       
                        </>
                        }

                        {data.assessmentMethods.length !== 0 &&
                        <>
                            <div className="ms-2">
                                <b>Assessment Method(s)/Graded Assignment(s):</b> 
                                <ul>
                                    {data.assessmentMethods.map((method, index) => {
                                        return <li key={index}>{method}</li>
                                    })}
                                </ul>
                                {data.assessmentDescription}
                            </div>
                            <hr />
                        </>}

                        {data.accommodations.length !== 0 && 
                        <>
                            <div className="ms-2">
                                <b>Accommodations:</b> 
                                <ul>
                                    {data.accommodations.map((accommodation, index) => {
                                        return <li key={index}>{accommodation}</li>
                                    })}
                                </ul>
                                {data.otherAccDescription}
                            </div>
                        </>
                        }
                    </>
                    }

                    
                </div>
            </div>
        </div>
    )
}

export default IndividualPlanDay;
