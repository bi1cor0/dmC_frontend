import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        class: ""
      });
    
      function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
      }
    
      async function handleSubmit(e){
        e.preventDefault()
    
        try {
          let res = await axios({
            method: 'POST',
            url: '',
            data: formData
          })
        } catch (err) {
          console.error(err)
        }
      }
    

  return (
    <form onSubmit={handleSubmit}>
    <input onChange={handleChange} name={'name'} type="text" />
    <input onChange={handleChange} name={'class'} type="text" />
  </form>  
  )
}

