import React, { useState } from 'react'
import Cardlist from './components/Cardlist'

//Creating a sample card for character data first before bringing in the data
//from the backend to deal with logic first to see if everything works from the front end.


function App() {
  const [characterCard, setCharcterCard] = useState(sampleCard)//setting state of a character card by pass through the array of objs var

  return (
    <>
      <h1>Welcome to the Select Card Page</h1>
      <Cardlist characardClass={characterCard} />
    </>



  )
}

const sampleCard = [
  {
    Player_Name: "Bill C.",
    Character_Name: "Busterfield Sharpgrin",
    Class: "Warlock",
    Race: "Half-Orc",
    Level: 6,
    Health_Points: 53,
    Alive: true,
    Initiative: 12,
    id: 1
  },
  {
    Player_Name: "Bill C.",
    Character_Name: "Ardane Rackland",
    Class: "Blood-Hunter",
    Race: "Human",
    Level: 10,
    Health_Points: 105,
    Alive: false,
    Initiative: 15,
    id: 2
  },
  {
    Player_Name: "Bill C.",
    Character_Name: "Zekun Protector",
    Class: "Cleric",
    Race: "Warforged",
    Level: 4,
    Health_Points: 54,
    Alive: true,
    Initiative: 18,
    id: 3
  }
]

export default App
