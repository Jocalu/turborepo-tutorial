import { type Request, type Response } from 'express'

const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  }
]

const rickAndMortyController = () => {
  const getCharacters = (_: Request, res: Response) => {
    try {
      return res.json(characters)
    } catch (error) {
      res.status(500)
      res.send(error)
    }
  }

  return {
    getCharacters
  }
}

export default rickAndMortyController()
