import { useAuth } from 'context/AuthContext'
import { useRouter } from 'node_modules/next/router'
import React, {useEffect} from 'react'

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {

  const {user} = useAuth()
  const router = useRouter()

  useEffect(() => {
    if(!user){
      router.push('/login')
    }
  }, [router, user])
  return (
    children
  )
}

export default ProtectedRoute