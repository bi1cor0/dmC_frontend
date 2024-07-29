import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cardlist from '../components/Cardlist';
import Card from '../components/CardBattle';
import MonCard from '../components/CardMonster'
import axios from 'axios'

const monsterArr = [ //setting up a monster array to be used to generate a random monster from the 5e API. 
    "adult-red-dragon",
    "night-hag",
    "mummy-lord",
    "pit-fiend",
    "tyrannosaurus-rex",
    "tarrasque",
    "xorn",
    "ancient-black-dragon",
    "basilisk",
    "hydra"
]

function getRandomNum(min, max) { //setting up random number generator function. 
    return Math.random() * (max - min) + min;
  }

export default function BattleTracker() {
  const navigate = useNavigate();
  let rand = getRandomNum(0, 9)
  let randNum = Math.round(rand)

  const [characterCard, setCharcterCard] = useState()//setting state of a character card by pass through the array of objs var
  const [monsterCard, setMonsterCard] = useState()//setting state for a monster card. 
 
  const btnBack = () => { //created variable that returns a function that will navigate back to the main page.
       navigate('/');
   };
 
   useEffect(() => { //useEffect hook to generate the list of characters from my database. 
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

   useEffect(() => { //use effect to fetch data from the dungeons and dragons 5e API. 
     async function getData(){
     try{
       let res = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterArr[randNum]}`)
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

 