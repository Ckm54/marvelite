import styles from '../styles/Home.module.css'
import Main from '../src/components/Main'

export default function Home(props) {
  return (
    <Main characters={props.results}/>
  )
}

export async function getStaticProps() {
  const response = await fetch(`https://www.superheroapi.com/api.php/508656130959573/search/b`)
  const data = await response.json()
  return {
    props: data
  }
}
