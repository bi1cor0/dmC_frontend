import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cardlist from '../components/Cardlist';
import axios from 'axios'

export default function BattleTracker() {
  const navigate = useNavigate();
  const [characterCard, setCharcterCard] = useState()//setting state of a character card by pass through the array of objs var
 
 
  const btnBack = () => { //created variable that returns a function that will navigate back to the main page.
       navigate('/');
   };
 
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
    <h1>Battle Tracker Page</h1>
    <button onClick={btnBack}>Back to the Main Page</button>
    </>
  )
}

 