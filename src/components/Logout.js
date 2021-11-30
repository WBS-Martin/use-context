import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
    setToken(null)
  }

  return (
    <>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout
