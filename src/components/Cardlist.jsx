import React from 'react'
import EverythingCard from './SelectCard'

function Cardlist({ characardClass }) {
  return (
    <div className="card-grid">
        {characardClass.map(charaCard =>{
            return <EverythingCard character={charaCard} key={charaCard.id} />
        })}
    </div>
  )
}

export default Cardlist