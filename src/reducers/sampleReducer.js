import { SAMPLE } from "../actions/types";

const initialState = {
    count: 0
}

const sampleReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case SAMPLE:
            return {
                ...state,
                count: state.count + 1
            }
        default: 
            return state;
    }
}

export default sampleReducer;