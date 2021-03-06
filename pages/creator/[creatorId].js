import React from 'react'
import CreatorPage from '../../src/components/Creator'
import { ts, PUBLIC_KEY, hash } from "../api/hello"
import Head from 'next/head'

export default function Creator({ creatorData, comicData }) {


  return (
    <>
      <Head>
        <title>creator</title>
      </Head>
      <CreatorPage creatorData={creatorData} comicData={comicData}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const dataIdObj = context.query
  const id = Number(dataIdObj.creatorId)
  const creatorResponse = await fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const creatorData = await creatorResponse.json()

  const comicResponse = await fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const comicData = await comicResponse.json()

  return {
    props: {
      creatorData: creatorData,
      comicData: comicData
    }
  }
}