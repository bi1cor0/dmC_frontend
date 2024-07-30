import React, { useState } from 'react'
import axios from 'axios'
//Form for adding new characters to the backend and into the frontend. 
export default function Form() {
    const [formData, setFormData] = useState({
        Player_Name: "",
        Character_Name: "",
        Class: "",
        Race: "",
        Level: "",
        Health_Points: "",
        Alive: "",
        Initiative: "",
      });
    
      function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
      }
    
      async function handleSubmit(e){
        e.preventDefault()
    
        try {
          let res = await axios({
            method: 'POST',
            url: 'http://localhost:4000/characters',
            data: formData
          })
          alert("Character has been created!")
          window.location.reload()
        } catch (err) {
          console.error(err)
        }
      }
    

  return (
  <form className='create-form' onSubmit={handleSubmit}>
    <label>Player's Name: </label>
    <input onChange={handleChange}  name={'Player_Name'} type="text" required/> <br></br>
    <label>Character Name: </label>
    <input onChange={handleChange} name={'Character_Name'} type="text" required/> <br></br>
    <label>Character's Class: </label>
    <input onChange={handleChange} name={'Class'} type="text" required/><br></br>
    <label>Character's Race: </label>
    <input onChange={handleChange} name={'Race'} type="text" required/><br></br>
    <label>Character's Level: </label>
    <input onChange={handleChange} name={'Level'} type="number" min="1" max="20" required/><br></br>
    <label>Character's HP: </label>
    <input onChange={handleChange} name={'Health_Points'} type="number" min="5" required/><br></br>
    <label>Is the Character Alive?: </label>
    <input onChange={handleChange} name={'Alive'} type="text" placeholder={'True or False'} required/><br></br>
    <label>Character's Initiative: </label>
    <input onChange={handleChange} name={'Initiative'} type="number" min="5" max="40" required/><br></br>
    <input type="submit" value="Submit"/>

  </form>  
  )
}

