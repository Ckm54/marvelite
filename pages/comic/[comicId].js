import React from 'react'
import ComicDetail from '../../src/components/ComicDetail'
import { ts, PUBLIC_KEY, hash } from "../api/hello"
import Head from 'next/head'

export default function Detail({ comicData }) {
  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <ComicDetail comicData={comicData}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const dataIdObj = context.query
  const id = Number(dataIdObj.comicId)
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  const comicData = await response.json()

  return {
    props: {
      comicData: comicData
    }
  }
}
