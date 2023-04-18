import { useEffect, useState } from 'react'

import { Button, Card, Header, ResponsiveGrid } from 'ui'

import '../styles/global.css'
import './app.css'

interface Pokemon {
  id: number
  name: string
  image: string
  type: string
}

const API_URL = 'https://turborepo-tutorial-server.vercel.app'

const PokemonApp = () => {
  const [pokemons, setPokemons] = useState([])
  const [display, setDisplay] = useState(true)

  const links = [
    { id: 1, url: '#', label: 'Home' },
    { id: 2, url: '#', label: 'About' },
    { id: 3, url: '#', label: 'Contact' }
  ]

  const handleDisplay = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    fetch(`${API_URL}/api/pokemons`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data)
      })
  }, [])

  return (
    <div>
      <Header links={links} />
      <h1 className="app__title">Pokemon List</h1>
      <div className="app__button">
        <Button
          label={display ? 'Ocultar' : 'Mostrar'}
          onClick={handleDisplay}
        />
      </div>
      {display && (
        <ResponsiveGrid minItemWidth={'320px'}>
          {pokemons.map((pokemon: Pokemon) => (
            <Card
              key={pokemon.id}
              title={pokemon.name}
              imageUrl={pokemon.image}
              description={pokemon.type}
            />
          ))}
        </ResponsiveGrid>
      )}
    </div>
  )
}

export default PokemonApp
