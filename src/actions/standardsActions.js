import { LOAD_STATE_DATA, LOAD_STATES_IDENTIFIERS, LOAD_JURISDICTIONS, GET_STANDARDS } from "./types";
import axios from 'axios';
import stateIdentifierData from "../data/stateIdentifierData";

const loadStateIdentifiers = () => {
    
    return {
        type: LOAD_STATES_IDENTIFIERS,
        stateIdentifierData
    }
}


const loadGeorgia = () => async (dispatch, getState) => {

    let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/jurisdictions/AB6E6F50DDF047E8BC3EE2CCFD33DCCC/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)

    // if(getState().standardsCRD.standardSets === []) {
    //     dispatch({
    //         type: LOAD_JURISDICTIONS,
    //         standardSets: responseData.data.data.standardSets
    //     })
    // }

    dispatch({
        type: LOAD_STATE_DATA,
        standardSets: responseData.data.data.standardSets
    })
}

// const getStandardsForSubject = (id) => async (dispatch, getState) => {

//     let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/standard_sets/${id}/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)

//     dispatch({
//         type: GET_STANDARDS,
//         standards: responseData.data.data.standards
//     })
    
// }



export { loadStateIdentifiers, loadGeorgia }