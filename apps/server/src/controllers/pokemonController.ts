import { type Request, type Response } from 'express'
import { pokemons } from '../db/pokemons.json'

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
    getPokemons
  }
}

export default pokemonController()
