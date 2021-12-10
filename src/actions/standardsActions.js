import { LOAD_STATE_DATA, LOAD_STATES_IDENTIFIERS, SAVE_CHOSEN_STATE } from "./types";
import axios from 'axios';
import stateIdentifierData from "../data/stateIdentifierData";

const loadStateIdentifiers = () => {
    
    return {
        type: LOAD_STATES_IDENTIFIERS,
        stateIdentifierData
    }
}

const saveChosenState = (chosenState) => {
    
    return {
        type: SAVE_CHOSEN_STATE,
        chosenState
    }
}

const loadStateData = (stateID) => async (dispatch) => {

    let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/jurisdictions/${stateID}/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)

    dispatch({
        type: LOAD_STATE_DATA,
        standardSets: responseData.data.data.standardSets
    })
}

export { loadStateIdentifiers, loadStateData, saveChosenState }