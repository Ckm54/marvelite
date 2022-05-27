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
    <>
      <p className='text-green-700 text-lg py-2 px-5 font-semibold italic ml-5'>Welcome, you are logged in as: {user.email}</p>
      {user ? children : null}
    </>
  )
}

export default ProtectedRoute