import { Card, Header } from 'ui'
import { useEffect, useState } from 'react'
import '../styles/global.css'
import './app.css'

interface Character {
  id: number
  name: string
  image: string
  species: string
}

export default function RickAndMortyApp() {
  const [characters, setCharacters] = useState([])

  const links = [
    { id: 1, url: '#', label: 'Home' },
    { id: 2, url: '#', label: 'Episodes' },
    { id: 3, url: '#', label: 'Characters' },
    { id: 4, url: '#', label: 'About' },
    { id: 5, url: '#', label: 'Contact' }
  ]

  useEffect(() => {
    fetch('http://localhost:4000/api/characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data)
      })
  }, [])

  return (
    <div>
      <Header links={links} />
      <h1 className="app__title">Rick and Morty characters</h1>

      <section className="app__grid">
        {characters.map((character: Character) => (
          <Card
            key={character.id}
            title={character.name}
            imageUrl={character.image}
            description={character.species}
          />
        ))}
      </section>
    </div>
  )
}
