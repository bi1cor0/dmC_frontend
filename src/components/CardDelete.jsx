import React from 'react'
import axios from 'axios'
//Card component which is for rendering character cards on the main page called Card Display. 
export default function Card({ character }) {

    async function handleSubmit(e){
        e.preventDefault()
       try {
          let res = await axios({
            method: 'DELETE',
            url: `http://localhost:4000/characters/${character._id}`,
          })
        } catch (err) {
          console.error(err)
        }
      }

  return (
    <>
    <div className='select-card' >
      <div>{character.Character_Name}</div>
      <div>{character.Class}</div>
      <div>Level: {character.Level}</div>
      <div>HP: {character.Health_Points}</div>
      <div>Player Name: {character.Player_Name}</div>
      <button onClick={handleSubmit} >Delete this Character</button>
    </div>
    </>
  )
}

