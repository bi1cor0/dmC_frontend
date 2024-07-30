import React, { useState, useReducer} from 'react' 
//Card component which is for rendering character cards on battle page. 

function reducer(state, action){//using reducer function to state action that needs to be done when a button is pressed. 
  switch (action.type) {
    case "increment": { //when the action type is set to increment, increment the value in the payload. 
      return state + action.payload.step;
    }
    case "decrement": { //same with decrementing 
      return state - action.payload.step;
    }
    default: {
      throw Error("Unknown Action: " + action.type); //error handling just in case an unknown action has been done. 
    }
  }
}

export default function Card({ character }) {
  const [healthCount, dispatch] = useReducer(reducer, character.Health_Points); //setting up useReducer function to take the character's healthpoints and setting them as a state to be edited
  const [amountChange, setamountChange] = useState(1); //setting state for the module incrementer. 

  return (
    <>
    <div className='battle-card' >
      <h3>{character.Character_Name}</h3>
      <div><strong>{character.Class}</strong></div>
      <div>HP:</div>
      <div style={{color: 'greenyellow', fontSize: 20}}><strong>{healthCount}</strong></div>
      <NumButton
        type="decrement"
        payload={{ step: amountChange }}
        dispatch={dispatch}
      >
        -
      </NumButton>
      <NumButton
        type="increment"
        payload={{ step: amountChange }}
        dispatch={dispatch}
      >
        +
      </NumButton>
      <br />
      <NumberInput state={amountChange} setState={setamountChange}/>
      <div style={{color: 'white'}}>Played by: {character.Player_Name}</div>
    </div>
    </>
  )
}

function NumButton({ children, dispatch, type, payload }) { //setting up a functional component that returns a button that will either increease or decrease the amount of the payload on click.
  return (
    <button onClick={() => dispatch({ type: type, payload: payload })}>
      {children}
    </button>
  );
}

function NumberInput({ state, setState }) { //setting up functional component for the modular incrementer. when users enter a number, the buttons will increase or decrease based on the number entered. 
  return (
    <input
      className="numberInput"
      style={{width: '3em'}}
      type="number"
      step="1"
      value={state}
      onChange={(e) => setState(Number(e.target.value))} //when on change of the number in the input, set that number as the new state of the amount change. 
    />
  );
}

