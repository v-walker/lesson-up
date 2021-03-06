/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadStateData, loadStateIdentifiers, saveChosenState } from './actions/standardsActions';
// import stateIdentifierData from "./data/stateIdentifierData";

import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  
  const stateData = useSelector((state) => state.standardsCRD.stateIdentifiers);
  const savedState = useSelector((state) => state.standardsCRD.chosenState);
  const [chosenState, setChosenState] = useState(savedState);
  const [switchStates, setSwitchStates] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStateIdentifiers());
    // dispatch(loadGeorgia());
    // console.log(stateIdentifierData);
  }, []);

  // console.log(stateData);

  const handleStateSelection = (e) => {
    let stateID = e.target.children[e.target.selectedIndex].id;

    setChosenState(e.target.value);

    dispatch(saveChosenState(e.target.value));

    dispatch(loadStateData(stateID));
  }
  
  return (
    <>
      <div className="row d-flex justify-content-center mx-4 mx-md-0 mt-5 mb-5 gx-0">
        <div className="col-12 col-md-10 col-xl-8 intro oops">
          <h2>Welcome to Lesson Up</h2>
          <hr />

          Hello and welcome. We're so glad you're here. <br />
          <b>Lesson Up</b> allows public school teachers to create weekly lesson plans for each content area they teach. You don't have to plan from a blank slate. Fill in a few blanks, and we'll format the information for you in lesson plan layout you can print. You can save plans to view and print later, and you can search your saved plans.
          <br />
          <br />
          If you are new to our site, select the state in which you reside to beginning using our lesson planner. Otherwise, click <Link to="/create">Continue Planning</Link> below to continue where you left off. If you need to plan for a different state or are curious about the standards in other states, you can select a different state below.
          <br />
          <br />
          {(chosenState && !switchStates)?
          // user has previously used the site and chosen a state ==> show this
          <>
            You have chosen to plan for  <b><i>{savedState}</i></b>.
            <br /><br />
            <div className="d-flex justify-content-center m-0 p-0 g-0">
              <Button className="btn btn-warning"><Link to="/create">Continue Planning</Link></Button>
              <Button className="ms-2 btn btn-warning" onClick={() => setSwitchStates(!switchStates)}>Plan for a different state</Button>
            </div>

          </>
          : 
          // user is new to the site and has not chosen a state yet OR has chosen to pick a different state ==> show this
          <>
          {/* Let's get started! Select your state to begin planning.
          <br /> */}
          <br />
          <Form>
          <Form.Label>Select a state</Form.Label>
            <Form.Select value={chosenState} onChange={(e) => handleStateSelection(e) }>
              <option hidden>Select your state</option>
              {stateData.map(stateObj => {
                return <option key={stateObj.id} id={stateObj.id}>{stateObj.title}</option>
              })}
            </Form.Select>
          </Form>

          {chosenState && 
            <> 
            <br />
            <br />
            Great! Let's start planning for <b><i>{savedState}</i></b>.
            <br />
            <div className="d-flex justify-content-center">
              <Button className="btn btn-warning"><Link to="/create">Start Planning</Link></Button>
            </div>
            

            </>
          }
          </>}

          

        </div>
      </div>

    </>
  );
}

export default App;
