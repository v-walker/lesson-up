import { SAVE_DAILY_PLANS, CLEAR_DAILY_PLANS, SAVE_WEEKLY_PLANS } from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    dailyPlans: {
        "Monday": {},
        "Tuesday": {},
        "Wednesday": {},
        "Thursday": {},
        "Friday": {}
    },
    fullPlans: []
}

const planDataReducer = (state=initialState, action) => {
    switch(action.type) {
        case SAVE_DAILY_PLANS:
            return {
                ...state,
                dailyPlans: {
                    ...state.dailyPlans,
                    [action.day]: action.newPlanData
                }
            }
        case CLEAR_DAILY_PLANS:
            return {
                ...state,
                dailyPlans: {
                    "Monday": {},
                    "Tuesday": {},
                    "Wednesday": {},
                    "Thursday": {},
                    "Friday": {}
                }
            }
        case SAVE_WEEKLY_PLANS:
            return {
                ...state,
                fullPlans: [...state.fullPlans, {
                    id: uuidv4(),
                    data: action.data
                }]
            }
        default:
            return state
    }
}

export default planDataReducer;
