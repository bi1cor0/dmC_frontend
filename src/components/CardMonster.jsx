import React from 'react'
//Card component which is for rendering a monster card on battle page. 
export default function Card({ monster }) {

  return (
    <>
    <div className='monster-card' >
      <h2>{monster.name}</h2>
      <div>HP:</div>
      <div style={{color: 'red', fontSize: 30}} >{monster.hit_points}</div>
    </div>
    </>
  )
}

