import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import axiosClient from '../axios-client.js'
import { useStateContext } from '../contexts/ContextProvider'

const Signup = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const [errors, setErrors] = useState(null)
  const {setUser, setToken} = useStateContext()
  const onSubmit = (ev) => {
    ev.preventDefault()
    //payload object
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }
    console.log(payload)
    //send payload to api
    axiosClient.post('/signup', payload)
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
          <h1 className='title'>Signup </h1>
          {errors && <div className="alert alert-danger">
            <ul>
              {Object.keys(errors).map((key, index) => (
                <li key={index}>{errors[key][0]}</li>
              ))}
            </ul>
          </div>          
          }

          <input ref={nameRef} type="text" placeholder="Full Name" />
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input ref={passwordConfirmationRef} type="password" placeholder="Password confirmation" />
          <button type="submit" className='btn btn-block'>Signup</button>
          <p className='message'>
            Already Registered? <Link to="/Login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
