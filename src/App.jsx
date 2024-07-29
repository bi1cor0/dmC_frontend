import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'; //importing methods from react-router-dom
import Cardlist from './components/Cardlist'
import Card from './components/CardsA'; //importing a specific Card component to the main page app to pass as props in the Cardlist component. 
import AddCharacter from './pages/AddCharacter';
import DeleteCharacters from './pages/DeleteCharacters';
import UpdateCharacters from './pages/UpdateCharacters';
import Nav from './components/Navbar'; //importing navigation bar from the components which house all my links. 
import axios from 'axios'
import './App.css'



export default function App() {
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
              {characterCard && <Cardlist characardClass={characterCard} CardVariant={Card}/> /*Using a && to help with rendering a promise. 
              The characterCard state isn't loading fully and the && will check to see if the state is true before rendering.*/}
                <Nav /> 
          </> //rendering the nav bar in the main page path only since I just want it to exist in main path. 
      }></Route>
      <Route path='/add' element={<AddCharacter />}></Route>
      <Route path='/update' element={<UpdateCharacters />}></Route>
      <Route path='/delete' element={<DeleteCharacters />}></Route>
    </Routes>

    </>

  )
}

