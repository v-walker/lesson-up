import { SAVE_DAILY_PLANS } from './types';

const saveDailyPlans = (day, newPlanData) => {
    
    return {
        type: SAVE_DAILY_PLANS,
        day,
        newPlanData
    }
}

export { saveDailyPlans };
