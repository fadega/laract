import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const onSubmit = (ev) => {
    ev.preventDefault()
  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div>
        <form action="" onSubmit={onSubmit}>
          <h1 className='title'>Login </h1>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className='btn btn-block'>Login</button>
          <p className='message'>
            Not registered? <Link to="/signup">Create an account</Link>

          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
