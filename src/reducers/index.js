import { combineReducers } from 'redux';
import standardsReducer from './standardsReducer';
import planDataReducer from './planDataReducer';

// state.sampleCRD.count

const rootReducer = combineReducers({
    standardsCRD: standardsReducer,
    planCRD: planDataReducer
})

export default rootReducer;