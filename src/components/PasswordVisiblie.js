import React, { useState } from 'react'

const PasswordVisiblie = () => {
    const[passwordvisible, setPasswordvisible] = useState(false);
    const togglePassword = () =>{
        setPasswordvisible(!passwordvisible)
    }

  return (
    <>
        <h1>Password Visible?</h1>
        Password:<input type={passwordvisible?"text":"password"} placeholder='enter password' />
        <button onClick={togglePassword}> {passwordvisible?'👁️':'😵'}</button>
    </>
  )
}

export default PasswordVisiblie