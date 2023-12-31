/* eslint-disable react/jsx-uses-react, react/react-in-jsx-scope */
import { Link, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'

const DefaultLayout = () => {
  const {user, token} = useStateContext()
  if(!token){
    return <Navigate to="/login" />
  }

  const onLogout =(ev)=>{
    ev.preventDefault()
  
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
              {user.name}
              <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
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
