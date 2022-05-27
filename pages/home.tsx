import React from "react";
import Main from "../src/components/Main";
import { ts, hash, PUBLIC_KEY } from './api/hello'
import Head from "node_modules/next/head";


const Home = (props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
      <Main characters={props}/>
    </div>
    </>
  );
}

export async function getStaticProps(context) {

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

export default Home;