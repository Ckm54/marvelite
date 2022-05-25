import React from 'react'
import CreatorPage from '../../src/components/Creator'
import { ts, PUBLIC_KEY, hash } from "../api/hello"

export default function Creator({ creatorData }) {

  console.log(creatorData)
  return (
    <CreatorPage creatorData={creatorData}/>
  )
}

export async function getServerSideProps(context) {
  const dataIdObj = context.query
  const id = Number(dataIdObj.creatorId)
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const creatorData = await response.json()

  return {
    props: {
      creatorData: creatorData
    }
  }
}