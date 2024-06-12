import React, { useState } from 'react'

const Login = () => {
    const [value, setValue] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
       {value.name&& value.email && value.password
        ?alert("login succesfull...!"):alert("please enter the details...")}
    }
  return (
    <>
       Name:<input type='text' value={value.name} onChange={(e)=> setValue({...value, name:e.target.value})} />
       Email:<input type="email" value={value.email} onChange={(e)=> setValue({...value, email:e.target.value})} />
       password:<input type='password' value={value.password} onChange={(e)=>setValue({...value, password:e.target.value})} />
       <button onClick={handleSubmit}>Login</button>
        
    </>
  )
}

export default Login