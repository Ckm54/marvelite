import '../styles/globals.css'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import ProtectedRoute from "../src/components/ProtectedRoute"
import {useEffect} from "react"
import {useRouter} from "next/router"

import { Progress } from '../src/components/Main'
import {useProgressStore} from '../store'
import { AuthContextProvider } from "../context/AuthContext"

const noAuthRequired = ['/login', '/signup']

function MyApp({ Component, pageProps }) {

  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const isAnimating = useProgressStore((state) => state.isAnimating)

  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop)
    }
  },[setIsAnimating, router])

  return (
    <AuthContextProvider>
      <Progress isAnimating={isAnimating} />
      <NavBar />
      {noAuthRequired.includes(router.pathname) ?
        <Component {...pageProps} />
      :
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    }
      
      <Footer />
    </AuthContextProvider>
  )
}

export default MyApp
