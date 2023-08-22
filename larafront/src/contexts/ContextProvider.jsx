import { createContext,useContext, useState } from 'react';
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    // isLoggedIn: false,
    // isAuhorized: false,
    // isGuest: true,
    // isUser: false,
    // isSuperAdmin: false,
    // isAdmin: false,
    // isEditor: false,
    // isAuthor: false,
    // isContributor: false,
    // isSubscriber: false,

})



export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name:'Abun'
    })
    const [token, _setToken] = useState(null)

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACESS_TOKEN', token)
        }else{
            localStorage.removeItem('ACESS_TOKEN')
        }
    }

  return (
    <StateContext.Provider 
                value={{user,token,setUser,setToken}}>
                {children}
            </StateContext.Provider>
  )
}


//export default ContextProvider

// export  const useStateContext = () => {
//     return useContext(StateContext)
// }

export  const useStateContext = () =>  useContext(StateContext)

