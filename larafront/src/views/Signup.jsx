import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="login-signup-form animated fadeInDown">
      <div>
        <form action="" onSubmit={onSubmit}>
          <h1 className='title'>Signup </h1>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className='btn btn-block'>Login</button>
          <p className='message'>
            Have an account? <Link to="/Login">Create an account</Link>

          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
