import { LOAD_STATES_IDENTIFIERS, LOAD_STATE_DATA, LOAD_JURISDICTIONS } from "../actions/types";

const initialState = {
    stateIdentifiers: [],
    standardSets: [],
    standards: [],
}

const standardsReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_STATES_IDENTIFIERS:
            return {
                ...state,
                stateIdentifiers: action.stateIdentifierData
            }
        case LOAD_STATE_DATA:
            return {
                ...state,
                standardSets: action.standardSets
            }
        // case GET_STANDARDS:
        //     return {
        //         ...state,
        //         standards: [...state.standards, action.standards]
        //     }
        default: 
            return state;
    }
}

export default standardsReducer;