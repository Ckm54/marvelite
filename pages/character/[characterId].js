import Info from "../../src/components/Character"
import { ts, PUBLIC_KEY, hash } from "../api/hello"
import Head from "next/head"

export default function index({ character, characterComics }) {

  return (
    <>
      <Head>
        <title>Character</title>
      </Head>
      <Info character={character} characterComics={characterComics}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const dataIdObj = context.query
  const id = Number(dataIdObj.characterId)
  const characterResponse = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const character = await characterResponse.json()

  const comicResponse = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const characterComics = await comicResponse.json()

  return {
    props: {
      character: character,
      characterComics
    }
  }
}