import React, { useState, createContext } from 'react'
import Home from './components/Home'
import About from './components/About'
import Admin from './components/Admin'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Logout from './components/Logout'
import unicornPic from './images/unicorns_inc.jpg'
import { Link, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './utils/AuthContext'

export const CompanyContext = createContext({})

const App = () => {
  // store company information in a state
  const [company, setCompany] = useState({
    name: 'Unicorns Inc.',
    description: 'We are the best!',
    numOfCustomers: 500000,
  })
  const [token, setToken] = useState(null)
  console.log('token', token)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <CompanyContext.Provider value={{ company, setCompany }}>
        <div className='main-container'>
          <img src={unicornPic} alt='Unicorns Inc' />
          <ul className='menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/admin'>Admin</Link>
            </li>
            {token === null ? (
              <>
                <li>
                  <Link to='/signin'>Signin</Link>
                </li>
                <li>
                  <Link to='/signup'>Signup</Link>
                </li>
              </>
            ) : (
              <Logout />
            )}
          </ul>

          <Routes>
            <Route path='/about' element={<About />} />
            <Route
              path='/admin'
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} />
          </Routes>
          <footer>
            <p>
              &copy; {new Date().getFullYear()} {company.name}
            </p>
          </footer>
        </div>
      </CompanyContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
