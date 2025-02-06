import './LoginForm.css'

import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required/>
        </div>
        <div className="input-box">
          <input type="text" placeholder='Password' required/>
        </div>

      </form>
      <div className="remember-forgot">
        <label><input type="checkbox" />Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit">Login</button>

      <div className="sign-up">
        <p>Don't have an account? <a href="#">Sign Up</a></p>
      </div>

    </div>
  )
}

export default LoginForm