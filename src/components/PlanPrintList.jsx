import React from 'react';
import { useSelector } from 'react-redux';
import IndividualPlan from './IndividualPlan';

// utils
import { sortByTime } from '../utils'

function PlanPrintList() {
    const printList = useSelector(state => state.planCRD.printList);
    printList.sort(sortByTime);
    
    return (
        <div>
            {printList.map(planObj => {
                return <IndividualPlan key={planObj.id} planObj={planObj} />
            })}
        </div>
    )
}

export default PlanPrintList;
