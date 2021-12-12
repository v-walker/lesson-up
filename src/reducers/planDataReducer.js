// types
import { 
    SAVE_DAILY_PLANS, 
    CLEAR_DAILY_PLANS, 
    SAVE_WEEKLY_PLANS, 
    SAVE_CONTENT_AREA_DATA, 
    CLEAR_CONTENT_AREA_DATA, 
    DELETE_PLAN, 
    ADD_TO_PRINT_LIST,
    REMOVE_FROM_PRINT_LIST 
} from '../actions/types';

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
    fullPlans: [],
    printList: []
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
        case ADD_TO_PRINT_LIST:
            
            let planToAdd = state.fullPlans.find(plan => plan.id === action.id);
            console.log("plantoAdd", planToAdd);

            if (!state.printList.includes(planToAdd)) {
                return {
                    ...state,
                    printList: [...state.printList, planToAdd]
                }
            } else {
                return {
                    ...state
                }
            }
        case REMOVE_FROM_PRINT_LIST:
            return {
                ...state,
                printList: state.printList.filter(plan => plan.id !== action.id)
            }
        
        default:
            return state
    }
}

export default planDataReducer;

