import Head from 'next/head'
import Main from '../src/components/Main'
import { ts, hash, PUBLIC_KEY } from './api/hello'


export default function Home(props) {
  // const [heroes, setHeroes] = useState([])
  // const ts = Number(new Date())
  // const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
  // useEffect(() => {
  //   fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&&limit=24&apikey=${PUBLIC_KEY}&hash=${hash}`)
  //   .then(res => res.json())
  //   .then(data => setHeroes(data.data))
  // }, [heroes])

  return (
    <>
      <Head>
        <title>Marvelite</title>
      </Head>
      <Main characters={props}/>
    </>
  )
}

export async function getServerSideProps(context) {

  function generateLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&&nameStartsWith=${generateLetter()}&&limit=24&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const data = await response.json()

  return {
    props: data
  }
  
}
