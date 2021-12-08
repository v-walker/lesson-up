import { SAVE_DAILY_PLANS, CLEAR_DAILY_PLANS, SAVE_WEEKLY_PLANS } from './types';

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


const saveWeeklyPlans = (weekOf, gradeLevel, subject, selectedStandard1, selectedStandard2, selectedStandard3, dailyPlans) => {

    return {
        type: SAVE_WEEKLY_PLANS,
        data: {
            weekOf,
            gradeLevel,
            subject,
            selectedStandard1,
            selectedStandard2,
            selectedStandard3,
            dailyPlans
        }
    }
}

export { saveDailyPlans, saveWeeklyPlans, clearDailyPlans };
