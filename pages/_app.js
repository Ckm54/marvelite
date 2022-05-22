import '../styles/globals.css'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
