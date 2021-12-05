import { LOAD_JURISDICTIONS } from "./types";
import axios from 'axios';

// fetch to http://commonstandardsproject.com/api/v1/jurisdictions/

const loadGeorgia = () => async (dispatch, getState) => {
    // let data = await axios.get(`https://commonstandardsproject.com/api/v1/jurisdictions/?api-key=${process.env.REACT_APP_CSP_API_KEY}`);
    // let response = await fetch(`https://commonstandardsproject.com/api/v1/jurisdictions/?Api-Key=${process.env.REACT_APP_CSP_API_KEY}`)
    
    // let data = await response.json();

    let responseData = await axios.get(`https://api.commonstandardsproject.com/api/v1/jurisdictions/AB6E6F50DDF047E8BC3EE2CCFD33DCCC/?api-key=${process.env.REACT_APP_CSP_API_KEY}`)

    // if(getState().standardsCRD.standardSets === []) {
    //     dispatch({
    //         type: LOAD_JURISDICTIONS,
    //         standardSets: responseData.data.data.standardSets
    //     })
    // }

    dispatch({
        type: LOAD_JURISDICTIONS,
        standardSets: responseData.data.data.standardSets
    })
}


export { loadGeorgia }