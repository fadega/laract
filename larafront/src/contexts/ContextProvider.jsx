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

    // isUserVerified: false,
    // isUserUnverified: false,
    // isUserApproved: false,
    // isUserUnapproved: false,
    // isUserActive: false,
    // isUserInactive: false,
    // isUserBanned: false,
    // isUserUnbanned: false,
    // isUserDeleted: false,
    // isUserRestored: false,


})



export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACESS_TOKEN'))

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

