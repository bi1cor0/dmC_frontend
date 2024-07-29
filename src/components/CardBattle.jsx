import React from 'react'
//Card component which is for rendering character cards on battle page. 
export default function Card({ character }) {

  return (
    <>
    <div className='battle-card' >
      <h3>{character.Character_Name}</h3>
      <div><strong>{character.Class}</strong></div>
      <div>HP:</div>
      <div style={{color: 'greenyellow', fontSize: 20}}><strong>{character.Health_Points}</strong></div>
      <div style={{color: 'white'}}>Played by: {character.Player_Name}</div>
    </div>
    </>
  )
}

