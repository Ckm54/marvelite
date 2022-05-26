import {createContext, useContext} from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from "react"
import { auth } from "../config/firebase"


const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children} : {children:
  React.ReactNode}) => {

    const [user, setUser] = useState(null)
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          })
        } else {
          setUser(null)
        }
      })
      return () => unsubscribe();
    }, [])
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  }