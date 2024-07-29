import React from 'react'
//Card component A which is for rendering character cards on the main page. 
export default function Card({ character }) {

  return (
    <>
    <div className='select-card' >
      <div>{character.Character_Name}</div>
      <div>{character.Class}</div>
      <div>Level: {character.Level}</div>
      <div>HP: {character.Health_Points}</div>
      <div>Player Name: {character.Player_Name}</div>
    </div>
    </>
  )
}

