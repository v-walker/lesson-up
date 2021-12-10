import { SAVE_DAILY_PLANS, CLEAR_DAILY_PLANS, SAVE_WEEKLY_PLANS, SAVE_CONTENT_AREA_DATA, CLEAR_CONTENT_AREA_DATA, DELETE_PLAN } from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    contentAreaData: {},
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
        case SAVE_CONTENT_AREA_DATA:
            return {
                ...state,
                contentAreaData: action.contentAreaData
            }
        case CLEAR_CONTENT_AREA_DATA:
            return {
                ...state,
                contentAreaData: {}
            }
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
        case DELETE_PLAN:
            return {
                ...state,
                fullPlans: state.fullPlans.filter(plan => plan.id !== action.id)
            }
        default:
            return state
    }
}

export default planDataReducer;

