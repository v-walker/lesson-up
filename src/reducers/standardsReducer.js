import { LOAD_JURISDICTIONS, GET_STANDARDS } from "../actions/types";

const initialState = {
    standardSets: [],
    standards: []
}

const standardsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case LOAD_JURISDICTIONS:
            return {
                ...state,
                standardSets: action.standardSets
            }
        case GET_STANDARDS:
            return {
                ...state,
                standards: [...state.standards, action.standards]
            }
        default: 
            return state;
    }
}

export default standardsReducer;