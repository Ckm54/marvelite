import Info from "../../src/components/Character"
import { ts, PUBLIC_KEY, hash } from "../api/hello"

export default function index({ character }) {

  return (
    <Info character={character}/>
  )
}

export async function getServerSideProps(context) {
  const dataIdObj = context.query
  const id = Number(dataIdObj.characterId)
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const character = await response.json()

  console.log(character)
  return {
    props: {
      character: character
    }
  }
}