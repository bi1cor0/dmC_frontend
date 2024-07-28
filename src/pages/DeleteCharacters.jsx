import React from 'react'
import { useNavigate } from 'react-router-dom'


function DeleteCharacters() {
  const navigate = useNavigate();

  const btnBack = () => { //created variable that returns a function that will navigate back to the main page.
        navigate('/');
    };  

  return (
    <>
     <div>DeleteCharacters</div>   
     <button onClick={btnBack}>Back to the Main Page</button> 
    </>
  )
}

export default DeleteCharacters