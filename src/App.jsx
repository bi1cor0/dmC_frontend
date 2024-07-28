import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'; //importing methods from react-router-dom
import Cardlist from './components/Cardlist'
import AddCharacter from './pages/AddCharacter';
import DeleteCharacters from './pages/DeleteCharacters';
import UpdateCharacters from './pages/UpdateCharacters';
import Nav from './components/Navbar';
import axios from 'axios'
import './App.css'


function App() {
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


  return (
    <>
    <Routes>
      <Route path='/' element={
          <>
              <h1>Welcome to the Select Card Page</h1>
              {characterCard && <Cardlist characardClass={characterCard} /> /*Using a && to help with rendering a promise. 
              The characterCard state isn't loading fully and the && will check to see if the state is true before rendering.*/}
                <Nav />
          </>
      }></Route>
      <Route path='/add' element={<AddCharacter />}></Route>
      <Route path='/update' element={<UpdateCharacters />}></Route>
      <Route path='/delete' element={<DeleteCharacters />}></Route>
    </Routes>

    </>

  )
}


export default App
