import React from 'react'

export default function SelectCard({ character }) {
  return (
    <>
    <div className='select-card'><input type='checkbox'/>
      <div>{character.Character_Name}</div>
      <div>{character.Class}</div>
      <div>Level: {character.Level}</div>
      <div>HP: {character.Health_Points}</div>
    </div>
    </>
  )
}

