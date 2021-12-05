import { combineReducers } from 'redux';
import standardsReducer from './standardsReducer';

// state.sampleCRD.count

const rootReducer = combineReducers({
    standardsCRD: standardsReducer
})

export default rootReducer;