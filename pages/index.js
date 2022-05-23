import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Main from '../src/components/Main'
import md5 from 'md5'
import { data } from 'autoprefixer'

const PUBLIC_KEY = '1bc98542b53a9d850d459282d676e3e1'
const PRIVATE_KEY = '9aec4e4a418f0cb25dcf0278924e50d7e670386e'

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
    <Main characters={props}/>
  )
}

export async function getServerSideProps(context) {
  const ts = Number(new Date())
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&&limit=24&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const data = await response.json()

  return {
    props: data
  }
  
}
