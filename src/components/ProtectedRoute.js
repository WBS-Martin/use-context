import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/AuthContext'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { token } = useContext(AuthContext)

  if (!token) {
    setTimeout(() => {
      navigate('/signin')
    }, 2000)

    return <div>Please log in - you will be redirected automatically</div>
  }

  return children
}

export default ProtectedRoute
