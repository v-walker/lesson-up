import { combineReducers } from 'redux';
import sampleReducer from "./sampleReducer";

// state.sampleCRD.count

const rootReducer = combineReducers({
    sampleCRD: sampleReducer
})

export default rootReducer;