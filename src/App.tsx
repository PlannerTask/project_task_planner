import { useState } from 'react'
import { UserProvider } from './Providers/UserContext'
import { Router } from './routes'


export const App=()=> {


  return (
    <div className="App">
      <UserProvider>
      <Router/>
      </UserProvider>
    </div>
  )
}


