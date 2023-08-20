import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'

const DefaultLayout = () => {
  const {user, token} = useStateContext()
  if(!token){
    return <Navigate to="/login" />
  }
  return (
    <div id="defaultLayout">
        <aside>
          <Link to="/users">Users</Link>
          <Link to="/dashboard">Dashboard</Link>
        </aside>
        <div className='content'>
          <header>
            <div>
              Header
            </div>
            <div>
              User info
            </div>
          </header>          
          <main>
          <Outlet />
          </main>
        </div>

    </div>
  )
}

export default DefaultLayout
