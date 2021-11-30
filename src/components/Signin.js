import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const { setToken } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  // credentials ben and chicken
  const login = () => {
    fetch('https://wbs-simple-auth.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        const token = res.headers.get('x-authorization-token')
        if (token) {
          localStorage.setItem('token', token)
          setToken(token)
          navigate(`/admin`)
        } else {
          alert('Invalid credentials')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        name='login'
        placeholder='Login'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type='text'
        name='password'
        placeholder='Password'
      />
      <button onClick={login}>Login</button>
      <br />
      <Link to='/signup'>Signup</Link>
    </>
  )
}

export default Signin
