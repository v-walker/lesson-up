import { LOAD_JURISDICTIONS } from "../actions/types";

const initialState = {
    standardSets: []
}

const standardsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case LOAD_JURISDICTIONS:
            return {
                ...state,
                standardSets: action.standardSets
            }
        default: 
            return state;
    }
}

export default standardsReducer;