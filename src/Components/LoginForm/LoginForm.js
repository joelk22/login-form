import React from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required/>
          <FaUser />
        </div>
        <div className="input-box">
          <input type="text" placeholder='Password' required/>
          <FaEye />
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