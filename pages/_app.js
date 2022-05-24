import '../styles/globals.css'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import {useEffect} from "react"
import {useRouter} from "next/router"

import { Progress } from '../src/components/Main'
import {useProgressStore} from '../store'


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
    <>
      <NavBar />
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
