import React from 'react'

export default function SelectCard({ character }) {
  return (
    <>
    <div><input type='checkbox'/>{character.Character_Name}</div>
    </>
  )
}

