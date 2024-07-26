import React, { useState, useEffect } from 'react'
import Cardlist from './components/Cardlist'
import axios from 'axios'
import './App.css'


function App() {
  const [characterCard, setCharcterCard] = useState()//setting state of a character card by pass through the array of objs var

  useEffect(() => {
    async function getData(){
    let res = await axios.get(`http://localhost:4000/characters`)
    setCharcterCard(res.data)
    }
    getData();
  }, [])

  return (
    <>
      <h1>Welcome to the Select Card Page</h1>
      {characterCard && <Cardlist characardClass={characterCard} /> /*Using a && to help with rendering a promise. 
      The characterCard state isn't loading fully and the && will check to see if the state is true before rendering.*/}
    </>

  )
}


export default App
