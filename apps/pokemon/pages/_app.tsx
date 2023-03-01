import { Button, Card, Header, ResponsiveGrid } from 'ui'
import { useEffect, useState } from 'react'
import '../styles/global.css'
import './app.css'

interface Pokemon {
  id: number
  name: string
  image: string
  type: string
}

export default function PokemonApp() {
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
    fetch('http://localhost:4000/api/pokemons')
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
