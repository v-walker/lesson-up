import rawJurisdictionData from "./jurisdictionData";

const stateIdentifierData = rawJurisdictionData.filter(jurisdictionObj => jurisdictionObj.type === "state");

export default stateIdentifierData;