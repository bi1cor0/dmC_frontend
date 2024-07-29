import React, { useState } from 'react'
import axios from 'axios'
//Card component which is for rendering character cards on the main page called Card Display. 
export default function Card({ character }) {
  const [formData, setFormData] = useState({})

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()

   try {
      let res = await axios({
        method: 'PATCH',
        url: `http://localhost:4000/characters/${character._id}`,
        data: formData
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
    <div className='update-card' >
        <h4>For {character.Character_Name}</h4>
        <form className='create-form' onSubmit={handleSubmit}>
            <label>Player's Name: </label>
            <input name={'Player_Name'} onChange={handleChange} type="text" placeholder={character.Player_Name}/> <br></br>
            <label>Character Name: </label>
            <input name={'Character_Name'} onChange={handleChange} type="text" placeholder={character.Character_Name}/> <br></br>
            <label>Character's Class: </label>
            <input name={'Class'} onChange={handleChange} type="text" placeholder={character.Class}/><br></br>
            <label>Character's Race: </label>
            <input name={'Race'} onChange={handleChange} type="text" placeholder={character.Race}/><br></br>
            <label>Character's Level: </label>
            <input name={'Level'} onChange={handleChange} type="number" min="1" max="20" placeholder={character.Level}/><br></br>
            <label>Character's HP: </label>
            <input name={'Health_Points'} onChange={handleChange} type="number" min="5" placeholder={character.Health_Points}/><br></br>
            <label>Is the Character Alive?: </label>
            <input name={'Alive'} onChange={handleChange} type="text" placeholder={'True or False'}/><br></br>
            <label>Character's Initiative: </label>
            <input name={'Initiative'} onChange={handleChange} type="number" min="5" max="40" placeholder={character.Initiative}/><br></br>
        <input type="submit" value="Submit"/>

  </form> 
    </div>
    </>
  )
}

