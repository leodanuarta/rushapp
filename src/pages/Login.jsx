import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
       <span className="logo">RushApp</span>
       <span className="title">Login</span>
        <form action="">
          <input type="text" placeholder='Display Name' />
          <input type="email"placeholder='Email'  />
          <button>Sign In</button>
        </form>
        <p>You don't have an account ? Register </p>
      </div>
    </div>
  )
}

export default Login