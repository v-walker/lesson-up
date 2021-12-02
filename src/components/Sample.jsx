import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sampleAction } from '../actions/templateActions';

function Sample() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.sampleCRD.count)

    // component did mount
    useEffect(() => {

    }, [])

    useEffect(() => {
        // component did unmount using clean-up function
        // return () => {
        //     cleanup
        // }
    }, [])
    
    return (
        <div>
            <h1>Redux Template</h1>
            <h3>{count}</h3>

            <button onClick={() => dispatch(sampleAction(count))}>+</button>
        </div>
    )
}

export default Sample;
