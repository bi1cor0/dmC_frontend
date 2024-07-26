import React from 'react'
import SelectCard from './SelectCard'

export default function Cardlist({ characardClass }) {
  return (
    //using a .map method to cycle through the array of objects to create a new array of SelectCards with character data passed through from App.
    <div className="card-grid">
        {characardClass.map(charaCard =>{
            return <SelectCard character={charaCard} key={charaCard.id} />
        })}
    </div>
  )
}

 