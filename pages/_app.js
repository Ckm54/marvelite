import '../styles/globals.css'
import NavBar from '../src/components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
