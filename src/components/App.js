import React, { useState } from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';


const App = () => {
  const[formData,setForm]=useState({
    "email":'',
    "password":'',
    "name":'',
    "consent": ''
  })
  const[err,setError]=useState({
    name:'',
    password:'',
    email:''
  })
  function handleNameChange(event){
    setForm({...formData, name: event.target.value})
  }
  function handleEmailChange(event){
    setForm({...formData, email: event.target.value})
  }
  function handlePasswordChange(event){
    setForm({...formData, password: event.target.value})
  }
  function handleCheckboxChange(event){
    console.log(event.target.value);
    setForm({...formData, consent: event.target.value})
  }
  function handleSubmit(event){
    event.preventDefault()
    const obj={email:formData.email,
      password:formData.password,
      name:formData.name}
    const err=signUpFormValidation(obj)
    setError(err)
  }
  /*const handleRequest = (event)=>{
    event.preventDefault()
    const obj={email:email,
      password:password,
      name:name}
    const err=signUpFormValidation(obj)
    setError(err)
  } */
  
  return (
      <div>
        <label>Name: </label>
        <input id='name' type='text' value={formData.name} placeholder='enter name of user' onChange={handleNameChange}/><br/>
        <div>{err.name}</div><br/>
        <label>Email: </label>
        <input id='email' type='text' value={formData.email} placeholder='enter email of user' onChange={handleEmailChange}/><br/>
        <div>{err.email}</div><br/>
        <label>Password: </label>
        <input id='password' type='password' value={formData.password} placeholder='enter password of user' onChange={handlePasswordChange}/><br/>
        <div>{err.password}</div><br/>
        <label>Consent: </label>
        <input id='consent' type='checkbox' onChange={handleCheckboxChange}/><br/>
        
        <button type="button" onClick={handleSubmit}>Sign Up</button>
        
      </div>
  )
}


export default App;
