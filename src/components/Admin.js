import React, { useContext, useState } from 'react'
import Welcome from './Welcome'
import { CompanyContext } from '../App'

const Admin = () => {
  const { company, setCompany } = useContext(CompanyContext)
  const [input, setInput] = useState('')

  return (
    <>
      <h3>Company name</h3>
      <br />
      <div>Admin Page</div>
      <br />
      <Welcome />
      <br />
      <div>Lots of important secret stuff...</div>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder='Daily customers'
        type='text'
      />
      <button onClick={() => setCompany({ ...company, numOfCustomers: input })}>
        Save
      </button>
    </>
  )
}

export default Admin
