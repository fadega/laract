import React,{useEffect, useState} from 'react'
import axios from 'axios'
import axiosClient from '../axios-client.js'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [errors, setErrors] = useState(null)
  const {setUser, setToken} = useStateContext()

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      }
      console.log(payload)
      //send payload to api
      axiosClient.post('/login', payload)
        .then(({ data }) => {
          setToken(data.token)
          setToken(data.user)
        })
        .catch(err => {
          const response = err.response
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })


  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div>
        <form action="" onSubmit={onSubmit}>
          <h1 className='title'>Login </h1>
          {errors && <div className="alert alert-danger">
            <ul>
              {Object.keys(errors).map((key, index) => (
                <li key={index}>{errors[key][0]}</li>
              ))}
            </ul>
          </div>          
          }
          <input ref={emailRef}type="email" placeholder="email" />
          <input ref={passwordRef}type="password" placeholder="Password" />
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
