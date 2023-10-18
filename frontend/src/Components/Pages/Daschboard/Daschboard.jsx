import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/userContext';

const Daschboard = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Daschboard</h1>
      {!!user && (<h1>Welcome {user.name}! </h1>)}
    </div>
  )
}

export default Daschboard
