import React from 'react'
//Creating a cardlist component to store all cards that get passed through the loop. 
export default function Cardlist({ characardClass, CardVariant }) {
  return (
    //using a .map method to cycle through the array of objects to create a new array of SelectCards with character data passed through from
    <div className="card-grid">
        {characardClass.map(charaCard =>{
            return <CardVariant character={charaCard} key={charaCard._id} />
        })}
    </div>
  )
}

 