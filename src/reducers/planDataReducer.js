import { SAVE_DAILY_PLANS } from '../actions/types';

const initialState = {
    dailyPlans: {
        monday: {},
        tuesday: {},
        wednesday: {},
        thursday: {},
        friday: {}
    },
    fullPlan: []
}

const planDataReducer = (state=initialState, action) => {
    switch(action.type) {
        case SAVE_DAILY_PLANS:
            return {
                ...state,

            }
        default:
            return state
    }
}

export default planDataReducer;

