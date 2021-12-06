/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadGeorgia } from './actions/standardsActions';


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadGeorgia());
  }, []);
  

  return (
    <>
      some text here
    </>
  );
}

export default App;
