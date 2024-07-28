import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'; //importing methods from react-router-dom
import Cardlist from './components/Cardlist'
import AddCharacter from './pages/AddCharacter';
import axios from 'axios'
import './App.css'


function App() {
  const navigate = useNavigate();
  const [characterCard, setCharcterCard] = useState()//setting state of a character card by pass through the array of objs var

  useEffect(() => {
    async function getData(){
    try{
      let res = await axios.get(`http://localhost:4000/characters`)
      setCharcterCard(res.data)
    } catch(err){
      console.error("Cannot load data due to: " +err)
    }
    }
    getData();
  }, [])

  function btnNav(path){ //created a function that will navigate to any page. 
    navigate(`/${path}`);
};

  return (
    <>
    <Routes>
      <Route path='/' element={
          <>
              <h1>Welcome to the Select Card Page</h1>
              {characterCard && <Cardlist characardClass={characterCard} /> /*Using a && to help with rendering a promise. 
              The characterCard state isn't loading fully and the && will check to see if the state is true before rendering.*/}
              <button onClick={btnNav(`add`)}>Add a Character</button>
          </>
      }></Route>
      <Route path='/add' element={<AddCharacter />}></Route>
    </Routes>
    </>

  )
}


export default App
