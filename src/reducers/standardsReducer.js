import { LOAD_STATES_IDENTIFIERS, LOAD_STATE_DATA, SAVE_CHOSEN_STATE } from "../actions/types";

const initialState = {
    stateIdentifiers: [],
    chosenState: "",
    standardSets: [],
}

const standardsReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_STATES_IDENTIFIERS:
            return {
                ...state,
                stateIdentifiers: action.stateIdentifierData
            }
        case SAVE_CHOSEN_STATE:
            return {
                ...state,
                chosenState: action.chosenState
            }
        case LOAD_STATE_DATA:
            return {
                ...state,
                standardSets: action.standardSets
            }
        default: 
            return state;
    }
}

export default standardsReducer;