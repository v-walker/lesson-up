/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadGeorgia, loadStateIdentifiers } from './actions/standardsActions';
import stateIdentifierData from "./data/stateIdentifierData";


function App() {
  const dispatch = useDispatch();

  console.log(stateIdentifierData);

  useEffect(() => {
    dispatch(loadStateIdentifiers());
    dispatch(loadGeorgia());
  }, []);
  
  return (
    <>
      some text here
    </>
  );
}

export default App;
