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

    dispatch({
        type: LOAD_STATE_DATA,
        standardSets: responseData.data.data.standardSets
    })
}




export { loadStateIdentifiers, loadGeorgia }