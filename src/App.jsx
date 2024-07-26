import { useState } from 'react'

//Creating a sample card for character data first before bringing in the data
//from the backend to deal with logic first to see if everything works from the front end.
const sampleCard = [
  {
    Player_Name: "Bill C.",
    Character_Name: "Busterfield Sharpgrin",
    Class: "Warlock",
    Race: "Half-Orc",
    Level: 6,
    Health_Points: 53,
    Alive: true,
    Initiative: 12
  },
  {
    Player_Name: "Bill C.",
    Character_Name: "Ardane Rackland",
    Class: "Blood-Hunter",
    Race: "Human",
    Level: 10,
    Health_Points: 105,
    Alive: false,
    Initiative: 15
  },
  {
    Player_Name: "Bill C.",
    Character_Name: "Zekun Protector",
    Class: "Cleric",
    Race: "Warforged",
    Level: 4,
    Health_Points: 54,
    Alive: true,
    Initiative: 18
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Select Card Page</h1>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count} I'm keeping this here for state example
        </button>
        </div>
    </>



  )
}

export default App
