import { type Request, type Response } from 'express'

const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: 'Fire',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    id: 6,
    name: 'Charizard',
    type: 'Fire',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'Water',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 8,
    name: 'Wartortle',
    type: 'Water',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    id: 9,
    name: 'Blastoise',
    type: 'Water',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
]

const pokemonController = () => {
  const getPokemons = (_: Request, res: Response) => {
    try {
      return res.json(pokemons)
    } catch (error) {
      res.status(500)
      res.send(error)
    }
  }

  return {
    getPokemons,
  }
}

export default pokemonController()
