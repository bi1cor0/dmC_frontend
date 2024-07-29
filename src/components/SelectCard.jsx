import React from 'react'

export default function SelectCard({ character }) {

  function handleChange(e){
    console.log(e)
  }

  return (
    <>
    <div className='select-card' >
      <input type='checkbox' onChange={handleChange}/>
      <div>{character.Character_Name}</div>
      <div>{character.Class}</div>
      <div>Level: {character.Level}</div>
      <div>HP: {character.Health_Points}</div>
      <div>Player Name: {character.Player_Name}</div>
    </div>
    </>
  )
}

