import {createContext, useContext} from "react"
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect, useState } from "react"
import { auth } from "../config/firebase"


const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children} : {children:
  React.ReactNode}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
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
        setLoading(false)
      })
      return () => unsubscribe();
    }, [])

    const signup = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
      setUser(null)
      await signOut(auth)
    }
    return <AuthContext.Provider value={{user, login, signup, logout}}>{loading ? null : children}</AuthContext.Provider>
  }