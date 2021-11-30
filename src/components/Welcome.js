import React, { useContext } from 'react'
import { CompanyContext } from '../App'

const Welcome = () => {
  const { company } = useContext(CompanyContext)

  return (
    <>
      <p>
        Welcome to Unicorns Inc! {company.numOfCustomers} customers served
        daily!
      </p>
    </>
  )
}

export default Welcome
