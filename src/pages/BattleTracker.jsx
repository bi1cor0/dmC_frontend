import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cardlist from '../components/Cardlist';
import Card from '../components/CardBattle';
import MonCard from '../components/CardMonster'
import axios from 'axios'

export default function BattleTracker() {
  const navigate = useNavigate();
  const [characterCard, setCharcterCard] = useState()//setting state of a character card by pass through the array of objs var
  const [monsterCard, setMonsterCard] = useState()//setting state for a monster card. 
 
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

   useEffect(() => {
     async function getData(){
     try{
       let res = await axios.get(`https://www.dnd5eapi.co/api/monsters/adult-red-dragon`)
       setMonsterCard(res.data)
     } catch(err){
       console.error("Cannot load data due to: " +err)
     }
     }
     getData();
   }, [])

  return (
    <>
    <h1>Battle Tracker Page</h1>
    {characterCard && <Cardlist characardClass={characterCard} CardVariant={Card}/> }
    {monsterCard && <MonCard monster={monsterCard}/> }
    <button onClick={btnBack}>Back to the Main Page</button>
    </>
  )
}

 