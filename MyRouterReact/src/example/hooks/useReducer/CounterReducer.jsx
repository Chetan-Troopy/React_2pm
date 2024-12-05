import React, { useReducer } from 'react'

const initialState = 0;

function reducer(state, action){
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
            break;
        case "decrement":
            return {count: state.count - 1}
            break;
        case "reset":
            return {count: state.count = 0}
            break;
    
        default:
            break;
    }

}



function CounterReducer() {

    const [state , dispatch]  = useReducer(reducer, {count: 0})

  return (
    <>
    <div className="container">
        <h1 className='text-decoration-underline'>CounterReducer</h1>

        <div className="col">
            <h2 className='text-center py-3 border border-2 rounded-5 text-bg-dark'>Count = {state.count}</h2>
            <div className="d-flex justify-content-between">

            <button className='btn btn-dark' onClick={() => dispatch({type : "decrement"})}>Decrement</button>
            <button className='btn btn-info' onClick={() => dispatch({type : "reset"})}>Reset</button>
            <button className='btn btn-success' onClick={() => dispatch({type : "increment"})}>Increment</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CounterReducer