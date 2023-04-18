import { useEffect, useState } from 'react'

import { Card, Header, ResponsiveGrid } from 'ui'
import { capitalizeString } from 'utils'

import '../styles/global.css'
import './app.css'

interface Character {
  id: number
  name: string
  image: string
  species: string
}

const API_URL = 'https://turborepo-tutorial-server.vercel.app'

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([])

  const links = [
    { id: 1, url: '#', label: capitalizeString('home') },
    { id: 2, url: '#', label: capitalizeString('episodes') },
    { id: 3, url: '#', label: capitalizeString('characters') },
    { id: 4, url: '#', label: capitalizeString('about') },
    { id: 5, url: '#', label: capitalizeString('contact') }
  ]

  useEffect(() => {
    fetch(`${API_URL}/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data)
      })
  }, [])

  return (
    <div>
      <Header links={links} />
      <h1 className="app__title">Rick and Morty characters</h1>

      <ResponsiveGrid minItemWidth={'240px'}>
        {characters.map((character: Character) => (
          <Card
            key={character.id}
            title={character.name}
            imageUrl={character.image}
            description={character.species}
          />
        ))}
      </ResponsiveGrid>
    </div>
  )
}

export default RickAndMortyApp
