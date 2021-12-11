import { SAVE_DAILY_PLANS, CLEAR_DAILY_PLANS, SAVE_WEEKLY_PLANS, SAVE_CONTENT_AREA_DATA, CLEAR_CONTENT_AREA_DATA, DELETE_PLAN } from './types';

const saveContentAreaData = (contentAreaData) => {

    return {
        type: SAVE_CONTENT_AREA_DATA,
        contentAreaData
    }
}

const clearContentAreaData = () => {

    return {
        type: CLEAR_CONTENT_AREA_DATA
    }
}

const saveDailyPlans = (day, newPlanData) => {
    
    return {
        type: SAVE_DAILY_PLANS,
        day,
        newPlanData
    }
}

const clearDailyPlans = () => {
    
    return {
        type: CLEAR_DAILY_PLANS,
    }
}


const saveWeeklyPlans = (weekOf, gradeLevel, subject, selectedStandard1, selectedStandard2, selectedStandard3, contentVocab, time, dailyPlans) => {

    return {
        type: SAVE_WEEKLY_PLANS,
        data: {
            weekOf,
            gradeLevel,
            subject,
            selectedStandard1,
            selectedStandard2,
            selectedStandard3,
            contentVocab,
            time,
            dailyPlans
        }
    }
}

const deletePlan = (id) => {
    return {
        type: DELETE_PLAN,
        id
    }
}


export { saveContentAreaData, saveDailyPlans, saveWeeklyPlans, clearDailyPlans, clearContentAreaData, deletePlan };
