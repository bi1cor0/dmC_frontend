import React from 'react'
import { useNavigate } from 'react-router-dom'


function AddCharacter() {
    const navigate = useNavigate();

    const btnBack = () => { //created variable that returns a function that will navigate back to the main page.
        navigate('/');
    };

  return (
    <>
    <h1>Add a Character Here</h1>
    <button onClick={btnBack}>Back to the Main Page</button>

    </>
  )
}

export default AddCharacter