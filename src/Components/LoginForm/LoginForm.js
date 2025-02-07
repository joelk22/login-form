import React from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUser className="icon"/>
          </div>
          <div className="input-box">
            <input type="text" placeholder='Password' required/>
            <FaEye className="icon"/>
          </div>

        </form>
        <div className="remember-forgot">
          <label><input type="checkbox" /><span></span>Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
        <button className = "login-button" type="submit">Login</button>

        <div className="sign-up">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm